const mongoose = require("mongoose")
const Double = require('@mongoosejs/double');

const virement = new mongoose.Schema({
    id_user : {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_compte_beneficiaire: {type:mongoose.Types.ObjectId, ref:"comptes"},
    montant : {type:Double,required:true},
    date : {type:String, required:true},
    mois :{type:String, required:true},
    heure :{type:String,required:true}
})



const virements = mongoose.model("virements",virement);
module.exports = virements;
