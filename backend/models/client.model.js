const mongoose = require("mongoose")

const client = new mongoose.Schema({
    nom :{type:String, required:true},
    prenom : {type:String , require:true},
    email : {type:String , require:true},
    profession : {type:String,required:true},
    tel:{type:Number,required:true},
    cin : {type:String,required:true},
    id_agence :{type:mongoose.Types.ObjectId, ref:"agences"},
    id_type_client : {type:mongoose.Types.ObjectId, ref:"typeClients"}
})
const clients = mongoose.model("clients",client);
module.exports = clients;

