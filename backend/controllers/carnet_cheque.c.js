const carnet_cheques = require("../models/carnet_cheque.model")
const demande_carnet_cheques = require("../models/demande_carnet_cheque.model")
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

module.exports.valider_carnet_chéque_bancaire = async (req,res )=>{
    const response =  new carnet_cheques({
        date : req.body.date,
        id_user : req.body.id_user,
        id_cdc:req.info_compte._id,
        id_demande : req.body.id_demande
    })
    await response.save()

    const response2 = await demande_carnet_cheques.findOneAndUpdate({_id:req.body.id_demande},{
        etat_demande :"valider",
    },{
        new : true
    }).populate({path:"id_user",populate:{path:"id_client"}})
    await response2.save()

    transporter.use('compile', hbs(handlebarOptions));


    var mailOptions = {
      from: process.env.USER,
      to: response2.id_user.id_client.email,
      subject: "Demande de chéquier",
      template: 'validation_demande_carnet_cheque',
      context: {
        np:response2.id_user.id_client.nom +" "+response2.id_user.id_client.prenom,
        date : req.body.date
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


module.exports.consulter_resultat_demande = async (req,res )=>{
    const response = await carnet_cheques.find({id_demande : req.params.id }).populate({path:"id_user",populate:{path:"id_client"}});
    res.status(200).send(response)
}

module.exports.Consulter_les_carnets_de_chéque_validées = async(req,res)=>{
    const response = await carnet_cheques.find({id_cdc:req.params.id}).populate({path:"id_user id_demande" , populate:{path:"id_client"}}).sort({_id:-1});
    res.json(response);
  }


