const mongoose = require("mongoose")

const demande_carnet_cheque = new mongoose.Schema({
    nb_carnet_cheque : {type:String,required:true},
    format : {type:String,required:true},
    date : {type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    etat_demande: {type:String,required:true},

})
const demande_carnet_cheques = mongoose.model("demande_carnet_cheques",demande_carnet_cheque);
module.exports = demande_carnet_cheques;

