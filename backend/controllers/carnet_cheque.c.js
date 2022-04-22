const carnet_cheques = require("../models/carnet_cheque.model")
const demande_carnet_cheques = require("../models/demande_carnet_cheque.model")

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

    res.status(200).send(response)
}


module.exports.consulter_resultat_demande = async (req,res )=>{
    const response = await carnet_cheques.find({id_demande : req.params.id }).populate({path:"id_user",populate:{path:"id_client"}});
    res.status(200).send(response)
}