const virements = require("../models/virement.model");
const comptes = require("../models/compte.model")
module.exports.add = async (req,res)=>{
    let date_ob = new Date();
      let date = date_ob.getDate();
      let month = date_ob.getMonth() + 1;
      let year = date_ob.getFullYear();

      const dataFull = date+"/"+month+"/"+year


    const ribValid = await comptes.findOne({rib:req.body.ribBeneficiaire})
    const comptesUser = await comptes.findOne({_id:req.info_compte._id}).populate('_id');

 if(comptesUser.rib != req.body.ribBeneficiaire ){
    if(comptesUser.montant > req.body.montant)
    {
     if(ribValid ){
         const preventMontant = ribValid.montant;
 
         await comptes.findOneAndUpdate({rib:req.body.ribBeneficiaire},{
                 montant : (req.body.montant + preventMontant)
         },{
             new : true
         })
         
 
         await comptes.findOneAndUpdate({_id:req.info_compte._id},{
             montant :  comptesUser.montant - req.body.montant
         },{
             new : true
         });
 
         const virement =  new virements({
             id_user : req.info_compte._id,
             nomBeneficiaire : req.body.nomBeneficiaire,
             ribBeneficiaire : req.body.ribBeneficiaire,
             montant : req.body.montant,
             date : dataFull,
             id_user_recu : ribValid._id
         })
         await virement.save();
 
         res.status(200).json(virement);
 
     }
     else{
         res.status(422).send("SVP verifier vos coordonner ")
     }
    }else{
     res.status(422).send("solde insuffisant")
    }
 }else{
    res.status(422).send("SVP verifier vos coordonner ")
}
}

module.exports.find_transaction = async(req,res)=>{
    const list_transactions = await virements.find({id_user:req.info_compte._id})
    res.status(200).json(list_transactions);
}

module.exports.find_transaction_last = async(req,res)=>{
    const list_transactions = await virements.find({id_user:req.info_compte._id}).sort({_id: -1 }).limit(3)
    res.status(200).json(list_transactions);
}


module.exports.find_transaction_recu = async(req,res)=>{
    const list_transactions_recu = await virements.find({id_user_recu:req.info_compte._id})
    res.status(200).json(list_transactions_recu);
}
