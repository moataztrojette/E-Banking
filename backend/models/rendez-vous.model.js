const mongoose = require("mongoose")

const les_rendez_vous = new mongoose.Schema({
    link :{type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},
    id_demande :  {type:mongoose.Types.ObjectId, ref:"demande_rendez_vous"},

})
const rendez_vous = mongoose.model("rendez_vous",les_rendez_vous);
module.exports = rendez_vous;

