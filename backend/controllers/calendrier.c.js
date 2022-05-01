const calendriers = require('../models/calendrier.model')


module.exports.ajouter_Tâche = async (req,res)=>{
    const new_calendrier = new calendriers({
        nom_user : req.body.nom_user,
        raison : req.body.raison,
        start : req.body.start,
        heureDebut : req.body.heureDebut,
        id_cdc:req.info_compte._id,

    })
    await new_calendrier.save()
    res.status(200).send(new_calendrier)
}

module.exports.tâches = async (req,res)=>{
    const calendrier = await calendriers.find({id_cdc:req.info_compte._id});
    res.status(200).send(calendrier)
}


module.exports.supprimer_tâche = async (req,res)=>{
    await calendriers.findOneAndDelete({ id_cdc:req.info_compte._id , start:req.body.start });
    res.status(200).send("deleted")
}

