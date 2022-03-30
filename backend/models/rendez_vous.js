const mongoose = require("mongoose")

const rendez_vous = new mongoose.Schema({
    telephone :{type:Number, required:true},
    email : {type:String,required:true},
    date : {type:String,required:true},
    heure : {type:String,required:true},
    motif : {type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    link:  {type:String}



})
const les_rendez_vous = mongoose.model("les_rendez_vous",rendez_vous);
module.exports = les_rendez_vous;

