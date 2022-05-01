const carte_bancaire = require("../models/carte_bancaire.c")
const demande_carnet_cheque = require("../models/demande_carte_bancaire.model")

module.exports.valider_demande_carte_bancaire = async (req,res )=>{
    const response =  new carte_bancaire({
        date : req.body.date,
        heure : req.body.heure,
        rib : Math.floor(Math.random() * 10000000000000000) + 10000000000000000,
        id_user : req.body.id_user,
        id_cdc:req.info_compte._id,
        id_demande_carte : req.body.id_demande_carte,
    })
    await response.save()
    const response2 = await demande_carnet_cheque.findOneAndUpdate({_id:req.body.id_demande_carte},{
        etat_demande :"valider",
    },{
        new : true
    })
    await response2.save()

 
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