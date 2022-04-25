const mongoose = require("mongoose")

const carte_bancaire = new mongoose.Schema({
    date : {type:String,required:true},
    heure: {type:String,required:true},
    rib : {type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},
    id_demande_carte :  {type:mongoose.Types.ObjectId, ref:"demande_carte_bancaires"},

})
const carte_bancaires = mongoose.model("carte_bancaires",carte_bancaire);
module.exports = carte_bancaires;

