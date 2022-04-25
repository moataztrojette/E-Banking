const mongoose = require("mongoose")

const demande_carte_bancaire = new mongoose.Schema({
    date :{type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_type_carte : {type:mongoose.Types.ObjectId, ref:"type_carte_bancaires"},
    etat_demande: {type:String,required:true},


})
const demande_carte_bancaires = mongoose.model("demande_carte_bancaires",demande_carte_bancaire);
module.exports = demande_carte_bancaires;

