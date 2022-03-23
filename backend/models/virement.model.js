const mongoose = require("mongoose")

const virement = new mongoose.Schema({
    id_user : {type:mongoose.Types.ObjectId, ref:"comptes"},
    nomBeneficiaire : {type:String,required:true},
    ribBeneficiaire : {type:String,required:true},
    date : {type:String, required:true},
    montant : {type:Number,required:true},
    id_user_recu: {type:mongoose.Types.ObjectId, ref:"comptes"},
    mois :{type:String, required:true},

})
const virements = mongoose.model("virements",virement);
module.exports = virements;
