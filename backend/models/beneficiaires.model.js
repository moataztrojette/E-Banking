const mongoose = require("mongoose")

const beneficiaire = new mongoose.Schema({
    nom :{type:String, required:true},
    rib : {type:Number,required:true},
    id_user: {type:mongoose.Types.ObjectId, ref:"comptes"},

    
    
})
const beneficiaires = mongoose.model("beneficiaires",beneficiaire);
module.exports = beneficiaires;

