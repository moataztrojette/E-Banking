const mongoose = require("mongoose")

const client = new mongoose.Schema({
    nom :{type:String, required:true},
    prenom : {type:String , require:true},
    email : {type:String , require:true},
    profession : {type:String,required:true},
  
})
const clients = mongoose.model("clients",client);
module.exports = clients;

