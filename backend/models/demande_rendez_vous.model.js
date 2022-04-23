const mongoose = require("mongoose")

const rendez_vous = new mongoose.Schema({
    date : {type:String,required:true},
    heure : {type:String,required:true},
    motif : {type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    etat_demande: {type:String,required:true},

})
const demande_rendez_vous = mongoose.model("demande_rendez_vous",rendez_vous);
module.exports = demande_rendez_vous;

