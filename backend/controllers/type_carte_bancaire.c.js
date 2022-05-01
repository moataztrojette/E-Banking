const type_carte = require("../models/type_carte_bancaire.model")
const images = require("../models/image.model");


module.exports.ajouter_type_carte_bancaire = async (req,res)=>{
   
    const response = await type_carte.findOne({nom_carte : req.body.nom_carte})
    if(response){
        return res.status(422).send("Carte bancaire existe déjà ")
    }
    else{
        const nm = req.files.image_carte.name;

        const carte_bancaire =  new type_carte({
            nom_carte : req.body.nom_carte,
            plafond_global_carte : req.body.plafond_global_carte,
            plafond_retrait_par_jour : req.body.plafond_retrait_par_jour,
            plafond_retrait_par_semaine : req.body.plafond_retrait_par_semaine,
            Plafond_de_paiement : req.body.Plafond_de_paiement,
            id_cdc:req.info_compte._id,
            image_carte : nm,
        })
        const newImage = new images({
            ref: carte_bancaire._id,
            name: nm,
            body: req.files.image_carte.data,
            type: req.files.image_carte.mimetype,
          });
          await newImage.save();

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

module.exports.getImage = async (req, res) => {
    const id = req.params.idImage;
    const resImage = await images.findOne({ ref: id });
    res.setHeader("Content-Type", resImage.type);
    res.send(resImage.body);
  };
  