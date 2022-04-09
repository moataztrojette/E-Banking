const mongoose = require("mongoose")

const typeClient = new mongoose.Schema({
    nom_type :{type:String, required:true},

})
const typeClients = mongoose.model("typeClients",typeClient);
module.exports = typeClients;

