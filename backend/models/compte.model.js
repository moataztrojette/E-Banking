const mongoose = require("mongoose")

const compte = new mongoose.Schema({
   
    mdp :{type:String,required:true},
    login:{type:String,required:true},
    rib : {type:String,required:true},
    montant : {type:Number,required:true},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},
    isActive:{type:Boolean, required:true},
    id_client : {type:mongoose.Types.ObjectId, ref:"clients"},
    date_creation: {type:String,required:true},
   

})
const comptes = mongoose.model("comptes",compte);
module.exports = comptes;

