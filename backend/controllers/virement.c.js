const virements = require("../models/virement.model");
const comptes = require("../models/compte.model");
const historiques = require("../models/historique.model");



module.exports.add = async (req,res)=>{
    let date_ob = new Date();
      let date = date_ob.getDate();
      let month = date_ob.getMonth() + 1;
      let year = date_ob.getFullYear();

      const dataFull = year+"-"+month+"-"+date

      //const dataFull = month


    const ribValid = await comptes.findOne({rib:req.body.ribBeneficiaire})
    const comptesUser2 = await comptes.findOne({rib:req.body.ribBeneficiaire})
    const comptesUser = await comptes.findOne({_id:req.info_compte._id}).populate('_id');

 if(comptesUser.rib != req.body.ribBeneficiaire ){
    if(comptesUser.montant > req.body.montant)
    {
     if(ribValid ){

        if(parseInt(req.body.montant)>10000){
            let preventMontant = ribValid.montant;
        
            await comptes.findOneAndUpdate({rib:req.body.ribBeneficiaire},{
                    montant : parseInt(preventMontant)+parseInt(req.body.montant)
            },{
                new : true
            })
          
            
    
            await comptes.findOneAndUpdate({_id:req.info_compte._id},{
                montant :  parseInt(comptesUser.montant) - parseInt(req.body.montant)
            },{
                new : true
            });
    
            const virement =  new virements({
                id_user : req.info_compte._id,
                nomBeneficiaire : req.body.nomBeneficiaire,
                ribBeneficiaire : req.body.ribBeneficiaire,
                montant : req.body.montant,
                date : dataFull,
                id_user_recu : ribValid._id,
                mois : month

            
            })
            await virement.save();
   
            const historique =  new historiques({
               id_user : req.info_compte._id,
               montant :parseInt(comptesUser.montant) - parseInt(req.body.montant) ,
               date : dataFull,
              
           })
           await historique.save();
   
           const his =  new historiques({
               id_user : comptesUser2._id,
               montant :parseInt(comptesUser2.montant )+ parseInt(req.body.montant) ,
               date : dataFull,
              
           })
           await his.save();
            res.status(200).json(virement);
        }else{
            res.status(422).send("Désolé minimum pour faire un virement 10 dinar")
        }
     
     }else{
         res.status(422).send("SVP verifier vos coordonnées ")
     }
    }else{
     res.status(422).send("solde insuffisant")
    }
 }else{
    res.status(422).send("SVP verifier vos coordonnées ")
}
}

module.exports.find_transaction = async(req,res)=>{
    const list_transactions = await virements.find({id_user:req.info_compte._id}).populate({path:"id_user id_user_recu",populate:{path:"id_client"}})
    res.status(200).json(list_transactions);
}

module.exports.dernier_virement_envoyer = async(req,res)=>{
    const dernier_virement_envoyer = await virements.find({id_user:req.info_compte._id}).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 }).limit(3)
    res.status(200).json(dernier_virement_envoyer);
}


module.exports.dernier_virement_recu = async(req,res)=>{
    const dernier_virement_recu = await virements.find({id_user_recu:req.info_compte._id}).sort({_id: -1 }).limit(3).populate({path:"id_user id_user_recu",populate:{path:"id_client"}});
    res.status(200).json(dernier_virement_recu);
}


module.exports.virement_envoyer = async(req,res)=>{
    const virement_envoyer = await virements.find({id_user:req.info_compte._id}).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 })
    res.status(200).json(virement_envoyer);
}


module.exports.virement_recu = async(req,res)=>{
    const response = await virements.find({id_user_recu:req.info_compte._id}).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}

module.exports.filter_virement_envoyer = async(req,res)=>{
    const response = await virements.find({id_user:req.info_compte._id , 
        mois : {$gte :parseInt(req.body.date_deb),$lte:parseInt(req.body.date_fin)}
    }).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}





module.exports.filter_virement_recu = async(req,res)=>{
    const response = await virements.find({id_user_recu:req.info_compte._id , 
        mois : {$gte :parseInt(req.body.date_deb),$lte:parseInt(req.body.date_fin)}
    }).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}



//Admin ** cdc

  module.exports.dernier_virement_envoyer_ac = async(req,res)=>{
    const response = await virements.find({id_user:req.params.id}).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 }).limit(3)
    res.status(200).json(response);
}


module.exports.dernier_virement_recu_ac = async(req,res)=>{
    const response = await virements.find({id_user_recu:req.params.id}).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 }).limit(3)
    res.status(200).json(response);

}
  


  module.exports.virement_envoyer_ac = async(req,res)=>{
    const response = await virements.find({id_user:req.params.id}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 })
    res.status(200).json(response);
}


module.exports.virement_recu_ac = async(req,res)=>{
    const response = await virements.find({id_user_recu:req.params.id}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}

module.exports.filter_virement_envoyer_ac = async(req,res)=>{
    const response = await virements.find({id_user:req.params.id , 
        mois : {$gte :parseInt(req.body.date_deb),$lte:parseInt(req.body.date_fin)}
    }).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}

module.exports.filter_virement_recu_ac = async(req,res)=>{
    const response = await virements.find({id_user_recu:req.params.id , 
        mois : {$gte :parseInt(req.body.date_deb),$lte:parseInt(req.body.date_fin)}
    }).populate({path:"id_user id_user_recu",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}