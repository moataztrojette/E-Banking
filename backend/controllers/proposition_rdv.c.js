const demande_rendez_vous = require("../models/demande_rendez_vous.model")
const proposition_rdv = require("../models/proposition.model")
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


module.exports.proposition_rendez_vous = async (req,res )=>{
    const response =  new proposition_rdv({
        date : req.body.date,
        heure : req.body.heure,
        id_user : req.body.id_user,
        id_cdc:req.info_compte._id,
        id_demande : req.body.id_demande
    })
    const pop = await  proposition_rdv.populate(response,{path:"id_user id_demande",populate:{path:"id_client"}})
    await response.save()

    const response2 = await demande_rendez_vous.findOneAndUpdate({_id:req.body.id_demande},{
        etat_demande :"refuser",
    },{
        new : true
    })
    await response2.save()


        transporter.use('compile', hbs(handlebarOptions));


        var mailOptions = {
          from: process.env.USER,
          to: pop.id_user.id_client.email,
          subject: "Demande de rendez-vous en ligne",
          template: 'Annulation_demande_rdv',
          context: {
            np:pop.id_user.id_client.nom +" "+pop.id_user.id_client.prenom,
            newDate : req.body.date,
            newHeure : req.body.heure,
            date:pop.id_demande.date,
            heure:pop.id_demande.heure,
            motif:pop.id_demande.motif
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

module.exports.consulter_resultat_proposition_rdv = async (req,res )=>{
    const response = await proposition_rdv.find({id_demande : req.params.id }).populate({path:"id_user id_demande id_cdc",populate:{path:"id_client"}});
    res.status(200).send(response)
}
