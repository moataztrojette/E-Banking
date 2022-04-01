const chargeClienteles = require("../models/chargeClientele.model")

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




