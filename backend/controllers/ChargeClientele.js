const chargeClienteles = require("../models/chargeClientele.model")

var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports.Créer_son_compte_personne = async (req,res)=>{
    const verife_cin = await chargeClienteles.findOne({cin:req.body.cin})
    const verife_email = await chargeClienteles.findOne({email:req.body.email})
    var Check_cin = req.body.cin
    var Check_tel = req.body.tel
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var pass = req.body.mdp

    if(verife_email == null){
      if(verife_cin==null){
        if(Check_tel.length == 8){
          if(Check_cin.length>=8 && Check_cin.length<10){
            const nmdp = await bcrypt.hash(req.body.mdp,13)
            if(pass.match(decimal)){
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
            }else{
              return res.status(404).send("saisir un mot de passe entre 8 et 15 caractères contenant au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial")

            }
       
    
          }else{
            return res.status(404).send("Vérifier votre cin")

    
          }
        
        }else{
          return res.status(404).send("Vérifier votre Téléphone")

    
        }
          }else {
            return res.status(422).send("Le compte existe déjà ")

          }

        }else {
          return res.status(404).send("Adresse email est déjà utlilsé.Essayez un autre nom")

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

