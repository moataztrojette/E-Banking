const comptes = require("../models/compte.model")
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const clients =require("../models/client.model")

module.exports.inscription = async (req,res)=>{

  
      const client = new clients({
        nom : req.body.nom,
        prenom : req.body.prenom,
        email : req.body.email,
        profession : req.body.profession,
        tel:req.body.tel,
        cin : req.body.cin,
        id_agence:req.body.id_agence,
        id_type_client:req.body.id_type_client

    })
    await client.save()
  


        const nmdp = await bcrypt.hash(req.body.mdp,13)
        let generateLogin = req.body.nom.substr(0, 3)+Math.floor(Math.random() * 100) + 1000

        const compte = new comptes({

            mdp :nmdp,
            login:generateLogin,
            rib : Math.floor(Math.random() * 10000000000000000) + 10000000000000000,
            montant : 1000000,
            id_cdc:req.info_compte._id,
            isActive:true,
            id_client:client._id,
      

        })
        await compte.save()
        const response = await  comptes.populate(compte,{ path : 'id_client'})

        res.status(200).send(response);
   
};


module.exports.connexion = async (req,res)=>{

    const {login , mdp} = req.body 
    const compte = await comptes.findOne({login:login})

    if(!compte){
      return res.status(404).send("Adresse ou mot de passe incorrect")
    }
    
    let passwordIsValid = await bcrypt.compare(mdp,compte.mdp)
    
    if(compte && passwordIsValid){
      if(compte.isActive==true ){
        const token = jwt.sign({
          _id : compte._id,
          id_client:compte.id_client,
       
        },process.env.SECURITE,{
          expiresIn : '15d'
        })
        
    
        req.session.token  = token
        res.json({
          _id : compte._id,
        });
      }else{
        res.status(403).send("Pour Réactiver votre compte Rendez-vous dans l’agence la plus proche")

      }
  
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
    const compte = await comptes.find({_id:req.info_compte._id}).populate("id_client");
    res.json(compte);
}



module.exports.findall = async(req,res)=>{
    const compte = await comptes.find().populate("id_client").sort({_id:-1});
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

  const client = await clients.findOne({cin:req.params.cin}).select("_id")

  const res_recherche = await comptes.find({id_client:client}).populate("id_client")
  res.json(res_recherche);

};


module.exports.find_compte_user_ac = async(req,res)=>{
  const compte = await comptes.find({_id:req.params.id}).populate("id_client");
  res.json(compte);
}


module.exports.desactiver_compte =  async (req,res)=>{

  const response = await comptes.findOneAndUpdate({_id:req.params.id},{
      isActive : false,
      },{
          new : true
      })
      res.json(response)

}

module.exports.activer_compte =  async (req,res)=>{

  const response = await comptes.findOneAndUpdate({_id:req.params.id},{
      isActive : true,
      },{
          new : true
      })
      res.json(response)

}