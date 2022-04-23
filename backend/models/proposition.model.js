const mongoose = require("mongoose")

const propo_rendez_vous = new mongoose.Schema({
    date :{type:String,required:true},
    heure :{type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},
    id_demande :  {type:mongoose.Types.ObjectId, ref:"demande_rendez_vous"},

})
const proposition_rendez_vous = mongoose.model("proposition_rendez_vous",propo_rendez_vous);
module.exports = proposition_rendez_vous;

