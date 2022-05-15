const virements = require("../models/virement.model");
const comptes = require("../models/compte.model");
const historiques = require("../models/historique.model");
const beneficiaires = require("../models/beneficiaires.model");

const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();
const path = require("path");
var hbs = require("nodemailer-express-handlebars");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./controllers/Views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./controllers/Views"),
  extName: ".handlebars",
};

module.exports.generate_code = async(req,res)=>{
  const code = Math.random().toString(36).substring(2, 15);

  const user = await comptes.findOne({_id:req.info_compte._id}).populate("id_client")
  

  transporter.use("compile", hbs(handlebarOptions));

  var mailOptions = {
    from: process.env.USER,
    to: user.id_client.email,
    subject: "Code de sécurité",
    template: "Code_securite",
    context: {
      code_sec:code
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //console.log('Email sent: ' + info.response);
    }
  });


  res.json(code) 
 
}


module.exports.Faire_des_virements_bancaires = async (req, res) => {
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  const dataFull = year + "-" + month + "-" + date;

  //const dataFull = month

  const ribValid = await comptes.findOne({ rib: req.body.ribBeneficiaire });
  const comptesUser2 = await comptes
    .findOne({ rib: req.body.ribBeneficiaire })
    .populate("id_client");
  const comptesUser = await comptes
    .findOne({ _id: req.info_compte._id })
    .populate("_id");

  if (comptesUser.rib != req.body.ribBeneficiaire) {
    if (comptesUser.montant > req.body.montant) {
      if (ribValid) {
        if (parseInt(req.body.montant) > 10) {
          

          let preventMontant = ribValid.montant;

          await comptes.findOneAndUpdate(
            { rib: req.body.ribBeneficiaire },
            {
              montant:
                parseFloat(preventMontant) + parseFloat(req.body.montant),
            },
            {
              new: true,
            }
          );

          await comptes.findOneAndUpdate(
            { _id: req.info_compte._id },
            {
              montant:
                parseFloat(comptesUser.montant) - parseFloat(req.body.montant),
            },
            {
              new: true,
            }
          );

          const virement = new virements({
            id_user: req.info_compte._id,
            nomBeneficiaire: req.body.nomBeneficiaire,
            ribBeneficiaire: req.body.ribBeneficiaire,
            montant: req.body.montant,
            date: dataFull,
            id_user_recu: ribValid._id,
            mois: month,
          });

          transporter.use("compile", hbs(handlebarOptions));

          var mailOptions = {
            from: process.env.USER,
            to: comptesUser2.id_client.email,
            subject: "Virement réussi",
            template: "virement_réussi",
            context: {
              np:
              comptesUser2.id_client.nom +
                " " +
                comptesUser2.id_client.prenom,
            },
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              //console.log('Email sent: ' + info.response);
            }
          });

         

          await virement.save();

          const historique = new historiques({
            id_user: req.info_compte._id,
            montant:
              parseFloat(comptesUser.montant) - parseFloat(req.body.montant),
            date: dataFull,
          });
          await historique.save();

          const his = new historiques({
            id_user: comptesUser2._id,
            montant:
              parseFloat(comptesUser2.montant) + parseFloat(req.body.montant),
            date: dataFull,
          });
          await his.save();

          const response = await beneficiaires.findOne({
            rib: req.body.ribBeneficiaire,
            id_user: req.info_compte._id,
          });
          if (!response) {
            const beneficiaire = new beneficiaires({
              nom: req.body.nomBeneficiaire,
              rib: req.body.ribBeneficiaire,
              id_user: req.info_compte._id,
            });
            await beneficiaire.save();
          }
          res.status(200).json(virement);
        } else {
          res
            .status(422)
            .send("Impossible ! Le montant  minimum de virement est 10 dinar");
        }
      } else {
        res.status(422).send("SVP vérifier vos coordonnées ");
      }
    } else {
      res.status(422).send("solde insuffisant");
    }
  } else {
    res.status(422).send("SVP vérifier vos coordonnées ");
  }
};

module.exports.Consulter_historique_des_transactions_bancaires = async (req, res) => {
  const list_transactions = await virements
    .find({ id_user: req.info_compte._id })
    .populate({
      path: "id_user id_user_recu",
      populate: { path: "id_client" },
    });
  res.status(200).json(list_transactions);
};

module.exports.Filtrer_les_virements_bancaires_envoyés = async (req, res) => {
  const response = await virements
    .find({
      id_user: req.info_compte._id,
      mois: {
        $gte: parseInt(req.body.date_deb),
        $lte: parseInt(req.body.date_fin),
      },
    })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};

module.exports.Filtrer_les_virements_bancaires_reçus = async (req, res) => {
  const response = await virements
    .find({
      id_user_recu: req.info_compte._id,
      mois: {
        $gte: parseInt(req.body.date_deb),
        $lte: parseInt(req.body.date_fin),
      },
    })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};

module.exports.dernier_virements_envoyés = async (req, res) => {
  const dernier_virement_envoyer = await virements
    .find({ id_user: req.info_compte._id })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 })
    .limit(3);
  res.status(200).json(dernier_virement_envoyer);
};

module.exports.dernier_virements_reçus = async (req, res) => {
  const dernier_virement_recu = await virements
    .find({ id_user_recu: req.info_compte._id })
    .sort({ _id: -1 })
    .limit(3)
    .populate({
      path: "id_user id_user_recu",
      populate: { path: "id_client" },
    });
  res.status(200).json(dernier_virement_recu);
};

module.exports.liste_virements_envoyés = async (req, res) => {
  const virement_envoyer = await virements
    .find({ id_user: req.info_compte._id })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(virement_envoyer);
};

module.exports.liste_virements_reçus = async (req, res) => {
  const response = await virements
    .find({ id_user_recu: req.info_compte._id })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};



//Admin ** cdc

module.exports.dernier_virements_envoyés_ac = async (req, res) => {
  const response = await virements
    .find({ id_user: req.params.id })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 })
    .limit(3);
  res.status(200).json(response);
};

module.exports.dernier_virements_reçus_ac = async (req, res) => {
  const response = await virements
    .find({ id_user_recu: req.params.id })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 })
    .limit(3);
  res.status(200).json(response);
};

module.exports.liste_virements_envoyés_ac = async (req, res) => {
  const response = await virements
    .find({ id_user: req.params.id })
    .populate({ path: "id_user", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};

module.exports.liste_virements_reçus_ac = async (req, res) => {
  const response = await virements
    .find({ id_user_recu: req.params.id })
    .populate({ path: "id_user", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};

module.exports.filter_virements_envoyés_ac = async (req, res) => {
  const response = await virements
    .find({
      id_user: req.params.id,
      mois: {
        $gte: parseInt(req.body.date_deb),
        $lte: parseInt(req.body.date_fin),
      },
    })
    .populate({ path: "id_user", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};

module.exports.filter_virements_reçus_ac = async (req, res) => {
  const response = await virements
    .find({
      id_user_recu: req.params.id,
      mois: {
        $gte: parseInt(req.body.date_deb),
        $lte: parseInt(req.body.date_fin),
      },
    })
    .populate({ path: "id_user id_user_recu", populate: { path: "id_client" } })
    .sort({ _id: -1 });
  res.status(200).json(response);
};

module.exports.check_rib = async (req, res) => {

  const comptesUser = await comptes
    .findOne({ _id: req.info_compte._id })
    .populate("_id");

  if (comptesUser.rib != req.body.ribBeneficiaire) {
    res.json(true)
  }{
    res.json(false)

  } 
}