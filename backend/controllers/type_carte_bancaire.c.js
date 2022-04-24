const type_carte = require("../models/type_carte_bancaire.model")


module.exports.ajouter_type_carte_bancaire = async (req,res)=>{
   
    const response = await type_carte.findOne({nom_carte : req.body.nom_carte})
    if(response){
        return res.status(422).send("Carte bancaire existe déjà ")
    }
    else{
        const carte_bancaire =  new type_carte({
            nom_carte : req.body.nom_carte,
            plafond_global_carte : req.body.plafond_global_carte,
            plafond_retrait_par_jour : req.body.plafond_retrait_par_jour,
            plafond_retrait_par_semaine : req.body.plafond_retrait_par_semaine,
            Plafond_de_paiement : req.body.Plafond_de_paiement,
            id_cdc:req.info_compte._id,

        })
        await carte_bancaire.save();
        res.status(200).send(carte_bancaire)
    }
}
module.exports.consulter_les_type_de_cartes_bancaire = async (req,res)=>{
    const response = await type_carte.find({})
    res.json(response)   
}

module.exports.consulter_type_de_carte_bancaire = async (req,res)=>{
    const response = await type_carte.find({_id:req.params.id})
    res.json(response)   
}

module.exports.remove = async (req,res)=>{
    await type_carte.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}
