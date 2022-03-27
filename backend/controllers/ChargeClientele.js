const comptes = require("../models/client.model")
const virements = require("../models/virement.model")
const historique = require("../models/historique.model")


module.exports.find_compte_user = async(req,res)=>{
    const compte = await comptes.find({_id:req.params.id});
    res.json(compte);
  }
  
  module.exports.dernier_virement_envoyer = async(req,res)=>{
    const dernier_virement_envoyer = await virements.find({id_user:req.params.id}).sort({_id: -1 }).limit(3)
    res.status(200).json(dernier_virement_envoyer);
}


module.exports.dernier_virement_recu = async(req,res)=>{
    const dernier_virement_recu = await virements.find({id_user_recu:req.params.id}).sort({_id: -1 }).limit(3).populate("id_user");
    res.status(200).json(dernier_virement_recu);
}
  
module.exports.find_user_state = async(req,res)=>{
    const user = await historique.find({id_user : req.params.id}).select("montant date -_id")
    res.json(user)
    
}
module.exports.recherche_compte = async (req, res) => {
    const res_recherche = await comptes.find({
      cin: { $regex: req.params.cin, $options: "i" },
    })
    res.json(res_recherche);
  };

  module.exports.virement_envoyer = async(req,res)=>{
    const virement_envoyer = await virements.find({id_user:req.params.id}).sort({_id: -1 })
    res.status(200).json(virement_envoyer);
}


module.exports.virement_recu = async(req,res)=>{
    const virement_recu = await virements.find({id_user_recu:req.params.id}).populate("id_user").sort({_id: -1 });
    res.status(200).json(virement_recu);
}

module.exports.filter_virement_envoyer = async(req,res)=>{
    const response = await virements.find({id_user:req.params.id , 
        mois : {$gte :parseInt(req.body.date_deb),$lte:parseInt(req.body.date_fin)}
    }).sort({_id: -1 });
    res.status(200).json(response);
}

module.exports.filter_virement_recu = async(req,res)=>{
    const response = await virements.find({id_user_recu:req.params.id , 
        mois : {$gte :parseInt(req.body.date_deb),$lte:parseInt(req.body.date_fin)}
    }).populate("id_user").sort({_id: -1 });
    res.status(200).json(response);
}
