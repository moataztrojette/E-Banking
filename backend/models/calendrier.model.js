const mongoose = require("mongoose");

const calendrier = new mongoose.Schema({
    nom_user : {type:String,required:true},
    raison : {type:String,required:true},
    start :{type:String , required:true},
    heureDebut : {type: String , required:true},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},

})
const calendriers = mongoose.model('calendriers',calendrier)
module.exports = calendriers;
