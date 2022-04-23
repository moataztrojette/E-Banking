const demande_rendez_vous = require("../models/demande_rendez_vous.model")
const proposition_rdv = require("../models/proposition.model")

module.exports.proposition_rendez_vous = async (req,res )=>{
    const response =  new proposition_rdv({
        date : req.body.date,
        heure : req.body.heure,
        id_user : req.body.id_user,
        id_cdc:req.info_compte._id,
        id_demande : req.body.id_demande
    })
    await response.save()

    const response2 = await demande_rendez_vous.findOneAndUpdate({_id:req.body.id_demande},{
        etat_demande :"refuser",
    },{
        new : true
    })
    await response2.save()

    res.status(200).send(response)
}

module.exports.consulter_resultat_proposition_rdv = async (req,res )=>{
    const response = await proposition_rdv.find({id_demande : req.params.id }).populate({path:"id_user id_demande id_cdc",populate:{path:"id_client"}});
    res.status(200).send(response)
}
