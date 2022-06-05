const mongoose = require("mongoose")
const Double = require('@mongoosejs/double');

const virement = new mongoose.Schema({
    id_user : {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_compte_beneficiaire: {type:mongoose.Types.ObjectId, ref:"comptes"},
    montant : {type:Double,required:true},
    heure :{type:String,required:true},
    date:{
        jour:{type:Number, required:true},
        mois:{type:Number, required:true},
        année:{type:Number, required:true}
    }
})



const virements = mongoose.model("virements",virement);
module.exports = virements;
