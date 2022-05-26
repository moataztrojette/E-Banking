const mongoose = require("mongoose")

const agence = new mongoose.Schema({
    nom :{type:String, required:true},
    adresse:{type:String,required:true},
    email : {type:String,required:true},
    tel  : {type:Number,required:true},
})
const agences = mongoose.model("agences",agence);
module.exports = agences;

