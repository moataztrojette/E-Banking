const typeClients = require("../models/typeClient.model")

module.exports.ajouter_categorie_client = async (req,res)=>{
   
            const response = await typeClients.findOne({nom_type : req.body.nom_type})
            if(response){
                return res.status(422).send("Type Client existe déjà ")
            }
            else{
                const typeClient =  new typeClients({
                    nom_type : req.body.nom_type,
  
                })
                await typeClient.save();
                res.status(200).send(typeClient)
            }
}

module.exports.afficher_la_liste_categorie = async(req,res)=>{
    const response = await typeClients.find({})
    res.json(response)   
}


  module.exports.Archives_categorie_client = async (req,res)=>{
    await typeClients.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}
module.exports.recherche_type_client = async (req, res) => {
    const res_recherche = await typeClients.find({
      nom_type: { $regex: req.params.nom, $options: "i" },
    })
    res.json(res_recherche);
  };


