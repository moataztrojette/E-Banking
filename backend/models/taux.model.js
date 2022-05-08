const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    taux :{type:Number,required:true},
})
const Taux = mongoose.model("Taux",Schema);
module.exports = Taux;

