const mongoose = require("mongoose")

const compte = new mongoose.Schema({
    nom :{type:String, required:true},
    prenom : {type:String , require:true},
    email : {type:String , require:true},
    cin : {type:String,required:true},
    profession : {type:String,required:true},
    mdp :{type:String,required:true},
    rib : {type:String,required:true},
    montant : {type:Number,required:true},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},

    
})
const comptes = mongoose.model("comptes",compte);
module.exports = comptes;

