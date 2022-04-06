const mongoose = require("mongoose")

const DemandeFermetureCompte = new mongoose.Schema({
    np :{type:String, required:true},
    email : {type:String , require:true},
    motif : {type:String , require:true},
    id_user : {type:mongoose.Types.ObjectId, ref:"comptes"},
    isActive:{type:Boolean, required:true},
    date : {type:String, required:true}

   
})
const Demande_Fermeture_Comptes = mongoose.model("Demande_Fermeture_Comptes",DemandeFermetureCompte);
module.exports = Demande_Fermeture_Comptes;

