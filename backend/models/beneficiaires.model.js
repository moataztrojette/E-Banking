const mongoose = require("mongoose")

const beneficiaire = new mongoose.Schema({
    nom :{type:String, required:true},
    rib : {type:Number,required:true},
    
    
})
const beneficiaires = mongoose.model("beneficiaires",beneficiaire);
module.exports = beneficiaires;

