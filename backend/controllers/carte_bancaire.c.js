const carte_bancaire = require("../models/carte_bancaire.c")
const demande_carte_bancaire = require("../models/demande_carte_bancaire.model")
const nodemailer= require('nodemailer');
const env = require('dotenv')
env.config()
const path = require('path')
var hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.USER,
        pass: process.env.PASS
    }
  })
  
  const handlebarOptions = {
    viewEngine: {
      extName: ".handlebars",
      partialsDir: path.resolve('./controllers/Views'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./controllers/Views'),
    extName: ".handlebars",
  }


module.exports.valider_demande_carte_bancaire = async (req,res )=>{
    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear()+2;

    const dataFull = year+"-"+month+"-"+date
    
    const response =  new carte_bancaire({
        date : req.body.date,
        heure : req.body.heure,
        date_expiration:dataFull,
        rib : Math.floor(Math.random() * 10000000000000000) + 10000000000000000,
        id_user : req.body.id_user,
        id_cdc:req.info_compte._id,
        id_demande_carte : req.body.id_demande_carte,
    })
    await response.save()
    const response2 = await demande_carte_bancaire.findOneAndUpdate({_id:req.body.id_demande_carte},{
        etat_demande :"valider",
    },{
        new : true
    }).populate({path:"id_user id_type_carte ",populate:{path:"id_client "}});
    await response2.save()

    
    transporter.use('compile', hbs(handlebarOptions));


    var mailOptions = {
      from: process.env.USER,
      to: response2.id_user.id_client.email,
      subject: "Demande de carte bancaire",
      template: 'validation_demande_carte_bancaire',
      context: {
        np:response2.id_user.id_client.nom +" "+response2.id_user.id_client.prenom,
        date : req.body.date,
        nom_carte : response2.id_type_carte.nom_carte
      }
    
    };

        
    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        //console.log('Email sent: ' + info.response);
      }
    });

 
    res.status(200).send(response)
}

module.exports.consulter_resultat_demande_carte = async (req,res )=>{
    const response = await carte_bancaire.find({id_demande_carte : req.params.id }).populate({path:"id_user id_demande_carte",populate:{path:"id_client"}});
    res.status(200).send(response)
}

module.exports.consulter_les_carte_bancaires_par_client = async (req,res )=>{
    const response = await carte_bancaire.find({id_user : req.info_compte._id }).populate({path:"id_user id_demande_carte",populate:{path:"id_client id_type_carte"}});
    res.status(200).send(response)
}

module.exports.consulter_les_cartes_bancaires_validé = async(req,res)=>{
    const response = await carte_bancaire.find({id_cdc:req.params.id}).populate({path:"id_user id_demande_carte" , populate:{path:"id_client id_type_carte"}}).sort({_id:-1});
    res.json(response);
  }