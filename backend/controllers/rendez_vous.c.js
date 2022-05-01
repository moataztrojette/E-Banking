const rendez_vous = require("../models/rendez-vous.model")
const demande_rendez_vous = require("../models/demande_rendez_vous.model")
const calendriers = require('../models/calendrier.model')


module.exports.valider_rendez_vous = async (req,res )=>{



    const response =  new rendez_vous({
        link : req.body.link,
        id_user : req.body.id_user,
        id_cdc:req.info_compte._id,
        id_demande : req.body.id_demande
    })
    await response.save()
    const data = await  rendez_vous.populate(response,{path:"id_user id_demande id_cdc ",populate:{path:"id_client"}});







    const response2 = await demande_rendez_vous.findOneAndUpdate({_id:req.body.id_demande},{
        etat_demande :"valider",
    },{
        new : true
    }).populate({path:"id_user",populate:{path:"id_client"}})
    await response2.save()

    const new_rendez_vous = new calendriers({
        nom_user : data.id_user.id_client.nom +" "+ data.id_user.id_client.prenom,
        raison : data.id_demande.motif,
        start : data.id_demande.date,
        heureDebut : data.id_demande.heure,
        id_cdc:req.info_compte._id,

    }).populate({path:"id_user id_demande id_cdc ",populate:{path:"id_client"}});
    await new_rendez_vous.save()




    res.status(200).send(response)
}





module.exports.consulter_resultat_demande_rdv = async (req,res )=>{
    const response = await rendez_vous.find({id_demande : req.params.id }).populate({path:"id_user id_demande id_cdc",populate:{path:"id_client"}});
    res.status(200).send(response)
}

module.exports.consulter_les_rendez_vous_valider = async (req,res )=>{
    const response = await rendez_vous.find({id_cdc : req.info_compte._id }).populate({path:"id_user id_demande id_cdc ",populate:{path:"id_client"}});
    res.status(200).send(response)
}