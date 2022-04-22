const mongoose = require("mongoose")

const rendez_vous = new mongoose.Schema({
    date : {type:String,required:true},
    heure : {type:String,required:true},
    motif : {type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    link:  {type:String},
    reponse_cdc : {type:String,required:true},
    etat_rdv : {type:Boolean,required:true}



})
const les_rendez_vous = mongoose.model("les_rendez_vous",rendez_vous);
module.exports = les_rendez_vous;

