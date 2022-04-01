const mongoose = require("mongoose")

const admin = new mongoose.Schema({
    identifiant :{type:String, required:true},
    mdp : {type:Number,required:true},
    
    
})
const admins = mongoose.model("admins",admin);
module.exports = admins;

