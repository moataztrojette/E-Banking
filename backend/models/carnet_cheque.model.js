const mongoose = require("mongoose")

const carnet_cheque = new mongoose.Schema({
    date : {type:String,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},
    id_cdc : {type:mongoose.Types.ObjectId, ref:"chargeClienteles"},
    id_demande :  {type:mongoose.Types.ObjectId, ref:"demande_carnet_cheques"},

})
const carnet_cheques = mongoose.model("carnet_cheques",carnet_cheque);
module.exports = carnet_cheques;

