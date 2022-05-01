const mongoose = require("mongoose")

const type_carte_bancaire = new mongoose.Schema({
    nom_carte :{type:String,required:true},
    plafond_global_carte:{type:Number,required:true},
    plafond_retrait_par_jour : {type:Number},
    plafond_retrait_par_semaine :{type:Number,required:true},
    Plafond_de_paiement:{type:Number,required:true},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},
    image_carte : {type:String},


})
const type_carte_bancaires = mongoose.model("type_carte_bancaires",type_carte_bancaire);
module.exports = type_carte_bancaires;

