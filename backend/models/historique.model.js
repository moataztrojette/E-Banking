const mongoose = require("mongoose")

const historique = new mongoose.Schema({
    id_user : {type:mongoose.Types.ObjectId, ref:"comptes"},
    montant : {type:Number,required:true},
    date : {type:String,required:true}
})
const historiques = mongoose.model("historiques",historique);
module.exports = historiques;
