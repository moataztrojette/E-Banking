const comptes = require("../models/client.model")
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports.inscription = async (req,res)=>{
    const verife = await comptes.findOne({cin:req.body.cin})
    if(verife){
        return res.status(422).send("Le compte existe déjà ")
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
            montant : 1000000,
            id_cdc:req.info_compte._id
        })
        await compte.save()
        res.status(200).send(compte);
    }
   
};


module.exports.connexion = async (req,res)=>{

    const {cin , mdp} = req.body 
    const compte = await comptes.findOne({cin:cin})
    
  
    if(!compte){
      return res.status(404).send("Adresse ou mot de passe incorrect")
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
        res.status(403).send("Adresse ou mot de passe incorrect")
        
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




module.exports.changePassword = async (req,res)=>{

  const user = await comptes.findOne({_id : req.info_compte._id})
  if(user){
    let passwordIsValid = await bcrypt.compare(req.body.currentPassword,user.mdp)
    if(passwordIsValid){
      if(req.body.newPassword===req.body.confPassword)
      {
        const nmdp = await bcrypt.hash(req.body.newPassword,13)

        await comptes.findOneAndUpdate({_id:req.info_compte._id},{
          mdp :  nmdp
      },{
          new : true
      });
      return res.status(200).send("Mot de passe a été changé avec succés")

      }
      else{
        return res.status(404).send("Confirmer votre mot de passe")
      }
    }
    else{
      return res.status(404).send("Verifier votre mot de passe")
    }
  }
  

}

module.exports.recherche_compte_ac = async (req, res) => {
  const res_recherche = await comptes.find({
    cin: { $regex: req.params.cin, $options: "i" },
  })
  res.json(res_recherche);
};


module.exports.find_compte_user_ac = async(req,res)=>{
  const compte = await comptes.find({_id:req.params.id});
  res.json(compte);
}


//

