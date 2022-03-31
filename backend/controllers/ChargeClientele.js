const comptes = require("../models/client.model")
const virements = require("../models/virement.model")
const historique = require("../models/historique.model")
const chargeClienteles = require("../models/chargeClientele.mode")
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports.inscription = async (req,res)=>{
    const verife = await chargeClienteles.findOne({cin:req.body.cin})
    if(verife){
        return res.status(422).send("Le compte existe déjà ")
    }
    else{
        const nmdp = await bcrypt.hash(req.body.mdp,13)
        const chargeClientele = new chargeClienteles({
            nom : req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            cin : req.body.cin,
            mdp :nmdp, 
        })
        await chargeClientele.save()
        res.status(200).send(chargeClientele);
    }
};

module.exports.findCompte = async(req,res)=>{
    const response = await chargeClienteles.find({_id:req.info_compte._id});
    res.json(response);
}

module.exports.deconnexion = (req,res)=>{
    req.session = null
    res.send('logout')
}

module.exports.connexion = async (req,res)=>{

    const {cin , mdp} = req.body 
    const chargeClientele = await chargeClienteles.findOne({cin:cin})
    
  
    if(!chargeClientele){
      return res.status(404).send("Adresse ou mot de passe incorrect")
    }
    
    let passwordIsValid = await bcrypt.compare(mdp,chargeClientele.mdp)
    
    if(chargeClientele && passwordIsValid){
      const token = jwt.sign({
        _id : chargeClientele._id,
     
      },process.env.SECURITE,{
        expiresIn : '15d'
      })
  
      req.session.token  = token
      res.json({
        _id : chargeClientele._id,
      });
    }
      else {
        res.status(403).send("Adresse ou mot de passe incorrect")
        
      }
}





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
