const historique = require("../models/historique.model")

module.exports.find_montant = async(req,res)=>{
        const user = await historique.find({id_user : req.info_compte._id}).select("montant date -_id")
        res.json(user)
        
    }

    module.exports.find_user_state_ac = async(req,res)=>{
        const user = await historique.find({id_user : req.params.id}).select("montant date -_id")
        res.json(user)
        
    }
    