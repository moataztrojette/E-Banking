const comptes = require("../models/compte.model")
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const clients =require("../models/client.model")



module.exports.chercher_compte_par_mot_cle_cdc = async (req, res) => {

  const client = await clients.findOne({cin:req.params.cin,id_agence:req.info_compte.id_agence}).select("_id")

  const res_recherche = await comptes.find({id_client:client}).populate("id_client")
  res.json(res_recherche);

};

module.exports.consulter_les_comptes_bancaires = async(req,res)=>{
  const compte = await comptes.find().populate({path:"id_client" , populate:{path:"id_agence"}}).sort({_id:-1});
  res.json(compte);
}




module.exports.ajouter_compte = async (req,res)=>{

  let date_ob = new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  const dataFull = year+"-"+month+"-"+date

  
      const client = new clients({
        nom : req.body.nom,
        prenom : req.body.prenom,
        email : req.body.email,
        profession : req.body.profession,
        tel:req.body.tel,
        cin : req.body.cin,
        id_agence:req.info_compte.id_agence,
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
            date_creation:dataFull
      

        })
        await compte.save()
        const response = await  comptes.populate(compte,{ path : 'id_client'})

        res.status(200).send(response);
   
};


module.exports.se_connecter = async (req,res)=>{

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
        res.status(403).send("Pour réactiver votre compte rendez-vous dans l’agence la plus proche")

      }
  
    }
      else {
        res.status(403).send("Adresse ou mot de passe incorrect")
        
      }

}

module.exports.se_deconnecter = (req,res)=>{
    req.session = null
    res.send('logout')
}

module.exports.consulter_informations_personnelles = async(req,res)=>{
    const compte = await comptes.find({_id:req.info_compte._id}).populate("id_client");
    res.json(compte);
}

module.exports.modifier_mot_de_passe = async (req,res)=>{

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
      return res.status(404).send("Vérifier votre mot de passe")
    }
  }
  

}

//admin
module.exports.consulter_releves_compte_client_cdc = async(req,res)=>{
  const compte = await comptes.find({_id:req.params.id}).populate("id_client");
  res.json(compte);
}





module.exports.Consulter_les_comptes_crées_par_cdc = async(req,res)=>{
  const compte = await comptes.find({id_cdc:req.params.id}).populate({path:"id_client" , populate:{path:"id_agence"}}).sort({_id:-1});
  res.json(compte);
}

module.exports.activer_compte =  async (req,res)=>{

  const response = await comptes.findOneAndUpdate({_id:req.params.id},{
      isActive : true,
      },{
          new : true
      }).populate("id_client")
      res.json(response)

}
module.exports.fermer_compte =  async (req,res)=>{

  const response = await comptes.findOneAndUpdate({_id:req.params.id},{
      isActive : false,
      },{
          new : true
      }).populate("id_client")
      res.json(response)

}










module.exports.recherche_compte_ac = async (req, res) => {

  const client = await clients.findOne({cin:req.params.cin}).select("_id")

  const res_recherche = await comptes.find({id_client:client}).populate("id_client")
  res.json(res_recherche);

};








//les comptes bancaires par agence
module.exports.consulter_les_comptes_par_agence = async(req,res)=>{
  tabId =[] 
  Collection =[] 

  const client = await clients.find({id_agence:req.info_compte.id_agence}).select("_id")
  const AllCompte = await comptes.find({}).populate({path:"id_client" , populate:{path:"id_agence"}});

  if(client){
    for (let i=0;i<client.length;i++){
      {
        tabId.push(client[i]._id)
      }
    } 
    }
    //console.log(tabId)

      for (let i=0;i<tabId.length;i++){
        {
          for (let j=0;j<AllCompte.length;j++){
            {

              let a =  tabId[i].toString()
              let b = (AllCompte[j].id_client._id).toString()
              //console.log(a ," ===", b  )
              //console.log(a.localeCompare(b));

              if(a.localeCompare(b) == 0 ){
                Collection.push(AllCompte[j])
                //console.log(AllCompte[j].id_client._id ,"",tabId[i])

                  }
            }
        }
      } 

    }
  
 
    res.json(Collection);
}


module.exports.consulter_comptes = async(req,res)=>{
  const response = await comptes.findOne({id_client:req.params.id});
  res.json(response);
}


