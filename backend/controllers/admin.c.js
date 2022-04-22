const admin = require("../models/admin.model")
const jwt = require('jsonwebtoken')

module.exports.se_connecter = (req,res)=>{
    let identifiant = req.body.identifiant;
    let mdp = req.body.mdp;
   
    if(identifiant ==="admin" && mdp ==="admin123"){
        
      const tokenAdmin = jwt.sign({
        identifiant: identifiant,
        mdp : mdp
    },process.env.SECURITE,{
        expiresIn : '15d'
      });
      req.session.token  = tokenAdmin
      res.status(200).send("is Admin");
    }else{
      return res.status(404).send("Identifiant ou mot de passe incorrect")
    }
}

module.exports.se_deconnecter = (req,res)=>{
    req.session = null
    res.send('logout')
}
