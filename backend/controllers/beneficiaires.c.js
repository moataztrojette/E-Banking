const beneficiaires = require("../models/beneficiaires.model")

module.exports.ajouter_beneficiaire = async (req,res)=>{
   
            const response = await beneficiaires.findOne({rib : req.body.rib , id_user: req.info_compte._id })
            if(response){
                return res.status(422).send("Le bénéficiaire existe déjà ")
            }
            else{
                const beneficiaire =  new beneficiaires({
                    nom : req.body.nom,
                    rib : req.body.rib,
                    id_user : req.info_compte._id
                })
                await beneficiaire.save();
                res.status(200).send(beneficiaire)
            }
}

module.exports.findAll = async(req,res)=>{
    const response = await beneficiaires.find({id_user:req.info_compte._id})
    res.json(response)   
}
module.exports.archiver_beneficiaire = async (req,res)=>{
    await beneficiaires.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}