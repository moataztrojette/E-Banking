const comptes = require("../models/compte.model")
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports.inscription = async (req,res)=>{
    const verife = await comptes.findOne({cin:req.body.cin})
    if(verife){
        return res.status(422).send("Le compte exist deja ")
    }
    else{
        const nmdp = await bcrypt.hash(req.body.mdp,13)
        const compte = new comptes({
            nom : req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            cin : req.body.cin,
            profession : req.body.profession,
            mdp :nmdp,
            rib : Math.floor(Math.random() * 10000000000000000) + 10000000000000000,
            montant : 1000000
        })
        await compte.save()
        res.status(200).send(compte);
    }
   
};


module.exports.connexion = async (req,res)=>{

    const {cin , mdp} = req.body 
    const compte = await comptes.findOne({cin:cin})
    
  
    if(!compte){
      return res.status(404).send("Invalid Email or Password")
    }
    
    let passwordIsValid = await bcrypt.compare(mdp,compte.mdp)
    
    if(compte && passwordIsValid){
      const token = jwt.sign({
        _id : compte._id,
     
      },process.env.SECURITE,{
        expiresIn : '15d'
      })
  
      req.session.token  = token
      res.json({
        _id : compte._id,
      });
    }
      else {
        res.status(403).send("Invalid Adresse or Password")
        
      }
}

module.exports.deconnexion = (req,res)=>{
    req.session = null
    res.send('logout')
}

module.exports.findCompte = async(req,res)=>{
    const compte = await comptes.find({_id:req.info_compte._id});
    res.json(compte);
}


module.exports.findall = async(req,res)=>{
    const compte = await comptes.find();
    res.json(compte);
}



