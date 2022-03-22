const beneficiaires = require("../models/beneficiaires.model")

module.exports.add = async (req,res)=>{
   
            const response = await beneficiaires.findOne({rib : req.body.rib})
            if(response){
                return res.status(422).send("beneficiaires exist deja ")
            }
            else{
                const beneficiaire =  new beneficiaires({
                    nom : req.body.nom,
                    rib : req.body.rib,
                })
                await beneficiaire.save();
                res.status(200).send(beneficiaire)
            }
}

module.exports.findAll = async(req,res)=>{
    const response = await beneficiaires.find()
    res.json(response)   
}
module.exports.remove = async (req,res)=>{
    await beneficiaires.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}