const agences = require("../models/agence.mode")

module.exports.ajouter_agence = async (req,res)=>{
   
            const response = await agences.findOne({nom : req.body.nom})
            if(response){
                return res.status(422).send("L'agence existe déjà ")
            }
            else{
                tel = req.body.tel
                if(tel.length==8){
                    const agence =  new agences({
                        nom : req.body.nom,
                        email : req.body.email,
                        adresse:req.body.adresse,
                        tel : req.body.tel
                    })
                    await agence.save();
                    res.status(200).send(agence)
                }else{
                    return res.status(404).send("Vérifier votre Téléphone")

                }

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
