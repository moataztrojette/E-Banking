const comptes = require("../models/compte.model");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const clients = require("../models/client.model");
const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();
const path = require("path");
var hbs = require("nodemailer-express-handlebars");
const crypto = require("crypto-js");

module.exports.chercher_compte_par_mot_cle_cdc = async (req, res) => {
  const client = await clients
    .findOne({ cin: req.params.cin, id_agence: req.info_compte.id_agence })
    .select("_id");

  const res_recherche = await comptes
    .find({ id_client: client })
    .populate("id_client");
  res.json(res_recherche);
};

module.exports.consulter_les_comptes_bancaires = async (req, res) => {
  const compte = await comptes
    .find()
    .populate({ path: "id_client", populate: { path: "id_agence" } })
    .sort({ _id: -1 });
  res.json(compte);
};

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

module.exports.Créer_comptes_utilisateurs = async (req, res) => {
  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  const dataFull = year + "-" + month + "-" + date;

  const Verife = await clients.findOne({ email: req.body.email });
  const verife_cin = await clients.findOne({ cin: req.body.cin });
  if (Verife == null) {
    if (verife_cin == null) {
      var Check_cin = req.body.cin;
      var Check_tel = req.body.tel;

      if (Check_cin.length >= 8 && Check_cin.length < 10) {
        if (Check_tel.length == 8) {
          const client = new clients({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            profession: req.body.profession,
            tel: req.body.tel,
            cin: req.body.cin,
            id_agence: req.info_compte.id_agence,
            id_type_client: req.body.id_type_client,
          });
          await client.save();

          var generatePass = Math.random().toString(36).substring(2, 15);
          const nmdp = await bcrypt.hash(generatePass, 13);
          let generateLogin =
            req.body.nom.substr(0, 3) + Math.floor(Math.random() * 100) + 1000;

          const compte = new comptes({
            mdp: nmdp,
            login: generateLogin,
            rib:
              Math.floor(Math.random() * 10000000000000000) + 10000000000000000,
            montant: 1000,
            id_cdc: req.info_compte._id,
            isActive: true,
            id_client: client._id,
            date_creation: dataFull,
          });
          await compte.save();
          const response = await comptes.populate(compte, {
            path: "id_client",
          });

          transporter.use("compile", hbs(handlebarOptions));

          var mailOptions = {
            from: process.env.USER,
            to: req.body.email,
            subject: "Votre Compte bancaire en ligne ",
            template: "email",
            context: {
              np: req.body.prenom + " " + req.body.nom,
              login: generateLogin,
              mdp: generatePass,
            },
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              //console.log('Email sent: ' + info.response);
            }
          });
          res.status(200).send(response);
        } else {
          return res.status(404).send("Veuillez Vérifier votre Téléphone");
        }
      } else {
        return res.status(404).send("Veuillez vérifier votre cin");
      }
    } else {
      return res.status(404).send("CIN est déjà utlilsé.Essayez un autre cin");
    }
  } else {
    return res
      .status(404)
      .send("Adresse email est déjà utlilsé.Essayez un autre");
  }
};

module.exports.se_connecter = async (req, res) => {
  const { login, mdp } = req.body;
  const compte = await comptes.findOne({ login: login });

  if (!compte) {
    return res.status(404).send("Adresse ou mot de passe incorrect");
  }

  let passwordIsValid = await bcrypt.compare(mdp, compte.mdp);

  if (compte && passwordIsValid) {
    if (compte.isActive == true) {
      const token = jwt.sign(
        {
          _id: compte._id,
          id_client: compte.id_client,
        },
        process.env.SECURITE,
        {
          expiresIn: "15d",
        }
      );

      req.session.token = token;
      res.json({
        _id: compte._id,
      });
    } else {
      res
        .status(403)
        .send(
          "Pour réactiver votre compte rendez-vous dans l’agence la plus proche"
        );
    }
  } else {
    res.status(403).send("Login ou mot de passe incorrect");
  }
};

module.exports.se_deconnecter = (req, res) => {
  req.session = null;
  res.send("logout");
};

module.exports.consulter_informations_personnelles = async (req, res) => {
  const compte = await comptes
    .find({ _id: req.info_compte._id })
    .populate("id_client");
  res.json(compte);
};

module.exports.modifier_mot_de_passe = async (req, res) => {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  const user = await comptes.findOne({ _id: req.info_compte._id });
  if (user) {
    let passwordIsValid = await bcrypt.compare(
      req.body.currentPassword,
      user.mdp
    );
    var pass = req.body.newPassword;
    if (passwordIsValid) {
      if (pass.match(decimal)) {
        if (req.body.newPassword === req.body.confPassword) {
          const nmdp = await bcrypt.hash(req.body.newPassword, 13);

          await comptes.findOneAndUpdate(
            { _id: req.info_compte._id },
            {
              mdp: nmdp,
            },
            {
              new: true,
            }
          );
          return res.status(200).send("Mot de passe a été changé avec succés");
        } else {
          return res.status(404).send("Confirmer votre mot de passe");
        }
      } else {
        return res
          .status(404)
          .send(
            "saisir un mot de passe entre 8 et 15 caractères contenant au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial"
          );
      }
    } else {
      return res.status(404).send("Vérifier votre mot de passe");
    }
  }
};

//admin
module.exports.consulter_releves_compte_client_cdc = async (req, res) => {
  const compte = await comptes
    .find({ _id: req.params.id })
    .populate("id_client");
  res.json(compte);
};

module.exports.Consulter_les_comptes_crées_par_cdc = async (req, res) => {
  const compte = await comptes
    .find({ id_cdc: req.params.id })
    .populate({ path: "id_client", populate: { path: "id_agence" } })
    .sort({ _id: -1 });
  res.json(compte);
};

module.exports.activer_compte = async (req, res) => {
  const response = await comptes
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        isActive: true,
      },
      {
        new: true,
      }
    )
    .populate("id_client");
  res.json(response);
};
module.exports.fermer_compte = async (req, res) => {
  const response = await comptes
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        isActive: false,
      },
      {
        new: true,
      }
    )
    .populate("id_client");
  res.json(response);
};

module.exports.recherche_compte_ac = async (req, res) => {
  const client = await clients.findOne({ cin: req.params.cin }).select("_id");

  const res_recherche = await comptes
    .find({ id_client: client })
    .populate({ path: "id_client", populate: { path: "id_agence" } })
  res.json(res_recherche);
};

//les comptes bancaires par agence
module.exports.consulter_les_comptes_par_agence = async (req, res) => {
  tabId = [];
  Collection = [];

  const client = await clients
    .find({ id_agence: req.info_compte.id_agence })
    .select("_id");
  const AllCompte = await comptes
    .find({})
    .populate({ path: "id_client", populate: { path: "id_agence" } });

  if (client) {
    for (let i = 0; i < client.length; i++) {
      {
        tabId.push(client[i]._id);
      }
    }
  }
  //console.log(tabId)

  for (let i = 0; i < tabId.length; i++) {
    {
      for (let j = 0; j < AllCompte.length; j++) {
        {
          let a = tabId[i].toString();
          let b = AllCompte[j].id_client._id.toString();
          //console.log(a ," ===", b  )
          //console.log(a.localeCompare(b));

          if (a.localeCompare(b) == 0) {
            Collection.push(AllCompte[j]);
            //console.log(AllCompte[j].id_client._id ,"",tabId[i])
          }
        }
      }
    }
  }

  res.json(Collection);
};

module.exports.consulter_comptes = async (req, res) => {
  const response = await comptes.findOne({ id_client: req.params.id });
  res.json(response);
};

module.exports.Récupérer_votre_compte = async (req, res) => {
  const response = await clients
    .findOne({ email: req.body.email })
    .select("_id");
  const data2 = await comptes.findOne({ id_client: response._id });

  transporter.use("compile", hbs(handlebarOptions));

  var mailOptions = {
    from: process.env.USER,
    to: req.body.email,
    subject: "Réinitialiser le mot de passe  ",
    template: "resetPassword",
    context: {
      link: "http://localhost:3000/mot-de-passe-oublié/" + data2._id,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //console.log('Email sent: ' + info.response);
    }
  });

  res.json(data2);
};

module.exports.Récupérer_modifier_mot_de_passe = async (req, res) => {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  var pass = req.body.newPassword;

  if (pass.match(decimal)) {
    if (req.body.newPassword === req.body.confPassword) {
      const nmdp = await bcrypt.hash(req.body.newPassword, 13);

      await comptes.findOneAndUpdate(
        { _id: req.params.id },
        {
          mdp: nmdp,
        },
        {
          new: true,
        }
      );
      return res.status(200).send("Mot de passe a été changé avec succés");
    } else {
      return res.status(404).send("Confirmer votre mot de passe");
    }
  } else {
    return res
      .status(404)
      .send(
        "saisir un mot de passe entre 8 et 15 caractères contenant au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial"
      );
  }
};

module.exports.verife = (req, res) => {
  const token = req.session.token;
  jwt.verify(token, process.env.SECURITE, (error, decoded) => {
    if (error) {
      return res.status(403).send("invalid token");
    }
    res.json(decoded);
  });
};

module.exports.consulter_compte_bancaire = async (req, res) => {
  const compte = await comptes
    .findOne({ _id: req.info_compte._id })
    .populate("id_client");
  res.json(compte);
};

//statistique
module.exports.le_montant_total_des_comptes_bancaires_selon_lagence = async (req, res) => {
   les_agences = [];
   montants = [];
  const data = await comptes
    .find({})
    .populate({ path: "id_client", populate: { path: "id_agence" } });


      for (let j = 0; j < data.length; j++) 
      {
          les_agences.push(data[j].id_client.id_agence.nom);
      }
  
      const filteredArray_les_agences = les_agences.filter(function(ele , pos)
      {
        return les_agences.indexOf(ele) == pos;
      }) 
      let dataStat = []
      
      for (let i = 0; i < filteredArray_les_agences.length; i++) 
      {
        let montant = 0
        
        for (let j = 0; j < data.length; j++) 
        {
            if(  filteredArray_les_agences[i] == data[j].id_client.id_agence.nom)
            {
              montant = montant + data[j].montant
            }

        }
        dataStat.push({agence:filteredArray_les_agences[i],montant:montant})
        montants.push(montant)
      }

   

    

    res.json({filteredArray_les_agences,montants});
  
}


module.exports.Le_nombre_de_comptes_bancaires_selon_lagence= async (req, res) => {
  les_agences = [];
  nbCompte = [];
 const data = await comptes
   .find({})
   .populate({ path: "id_client", populate: { path: "id_agence" } });


     for (let j = 0; j < data.length; j++) 
     {
         les_agences.push(data[j].id_client.id_agence.nom);
     }
 
     const filteredArray_les_agences = les_agences.filter(function(ele , pos)
     {
       return les_agences.indexOf(ele) == pos;
     }) 

     for (let i = 0; i < filteredArray_les_agences.length; i++) 
     {
       let nb = 0
       for (let j = 0; j < data.length; j++) 
       {
           if(filteredArray_les_agences[i] == data[j].id_client.id_agence.nom)
           {
             nb = nb+1
           }
       }
       nbCompte.push(nb)
     }


         

   res.json({filteredArray_les_agences,nbCompte});
 
}

