const chargeClienteles = require("../models/chargeClientele.model")

var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports.ajouter_compte = async (req,res)=>{
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
            id_agence:req.body.id_agence,
            tel : req.body.tel
        })
        await chargeClientele.save()
        res.status(200).send(chargeClientele);
    }
};

module.exports.consulter_informations_personnelles = async(req,res)=>{
    const response = await chargeClienteles.find({_id:req.info_compte._id}).populate("id_agence");
    res.json(response);
}

module.exports.se_deconnecter = (req,res)=>{
    req.session = null
    res.send('logout')
}

module.exports.se_connecter = async (req,res)=>{

    const {cin , mdp} = req.body 
    const chargeClientele = await chargeClienteles.findOne({cin:cin})
    
  
    if(!chargeClientele){
      return res.status(404).send("Adresse ou mot de passe incorrect")
    }
    
    let passwordIsValid = await bcrypt.compare(mdp,chargeClientele.mdp)
    
    if(chargeClientele && passwordIsValid){
      const token = jwt.sign({
        _id : chargeClientele._id,
        id_agence : chargeClientele.id_agence,
     
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

module.exports.consulter_les_charges_clienteles_par_agence = async(req,res)=>{
  const response = await chargeClienteles.find({id_agence:req.params.id}).populate("id_agence");
  res.json(response);
}

module.exports.consulter_les_charges_clienteles = async(req,res)=>{
  const response = await chargeClienteles.find({_id:req.params.id}).populate("id_agence");
  res.json(response);
}



module.exports.chercher_cdc_par_mot_cle_cdc = async (req, res) => {
  const res_recherche = await chargeClienteles.find({
    prenom: { $regex: req.params.prenom, $options: "i" },
  }).populate("id_agence")
  res.json(res_recherche);
};

