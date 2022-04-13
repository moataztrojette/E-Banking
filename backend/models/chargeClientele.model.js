const mongoose = require("mongoose")

const chargeClientele = new mongoose.Schema({
    nom :{type:String, required:true},
    prenom : {type:String , require:true},
    email : {type:String , require:true},
    cin : {type:String,required:true},
    mdp :{type:String,required:true},
    id_agence :{type:mongoose.Types.ObjectId, ref:"agences"},
    tel:{type:Number, required:true},

})
const chargeClienteles = mongoose.model("chargeClienteles",chargeClientele);
module.exports = chargeClienteles;

