const agences = require("../models/agence.mode")

module.exports.ajouter_agence = async (req,res)=>{
   
            const response = await agences.findOne({nom : req.body.nom})
            if(response){
                return res.status(422).send("Agence existe déjà ")
            }
            else{
                const agence =  new agences({
                    nom : req.body.nom,
                    email : req.body.email,
                    tel : req.body.tel
                })
                await agence.save();
                res.status(200).send(agence)
            }
}

module.exports.consulter_les_agences = async(req,res)=>{
    const response = await agences.find({})
    res.json(response)   
}





module.exports.cherche_agence = async (req, res) => {
    const res_recherche = await agences.find({
      nom: { $regex: req.params.nom, $options: "i" },
    })
    res.json(res_recherche);
  };

  module.exports.remove = async (req,res)=>{
    await agences.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}
