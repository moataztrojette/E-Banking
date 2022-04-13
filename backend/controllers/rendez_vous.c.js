const rendez_vous = require("../models/rendez_vous")

module.exports.add = async (req,res)=>{
        const response =  new rendez_vous({
            telephone :req.body.telephone,
            email : req.body.email,
            date : req.body.date,
            heure : req.body.heure,
            motif : req.body.motif,
            id_user : req.info_compte._id,
            link :  "null",
            reponse_cdc:"En attente",
            etat_rdv:false


        })
        await response.save();
        const data = await  rendez_vous.populate(response,{ path : 'id_client'})

        res.status(200).send(data)
}

module.exports.liste_rdv = async(req,res)=>{
    const response = await rendez_vous.find({id_user:req.info_compte._id}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}


module.exports.find = async(req,res)=>{
    const response = await rendez_vous.find({etat_rdv:false}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}


module.exports.update_rdv =  async (req,res)=>{
    const body = req.body.link
    const Valider = body.match("https://meet")
    

    if(Valider ===null){
        return res.status(404).send("SVP choisissez un lien meet")
    }
    else{
        const response = await rendez_vous.findOneAndUpdate({_id:req.params.id},{
            link : req.body.link,
            etat_rdv:false
        },{
            new : true
        }).populate({path:"id_user",populate:{path:"id_client"}})
        res.json(response)
    }
    

}

module.exports.update_rdv_annuler =  async (req,res)=>{
        const response = await rendez_vous.findOneAndUpdate({_id:req.params.id},{
            reponse_cdc : req.body.reponse,
            etat_rdv:true
        },{
            new : true
        }).populate({path:"id_user",populate:{path:"id_client"}})
        res.json(response)
    

}



module.exports.remove = async (req,res)=>{
    await rendez_vous.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}