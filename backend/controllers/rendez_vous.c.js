const rendez_vous = require("../models/rendez_vous")

module.exports.demande_rendez_vous = async (req,res)=>{

    const response = await rendez_vous.findOne({date : req.body.date , id_user : req.info_compte._id })
    if(response){
        return res.status(422).send("Impossible de prendre deux rendez-vous pour le meme jour")
    }
    else{
        const response =  new rendez_vous({
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
      
}

module.exports.consulter_rendez_vous = async(req,res)=>{
    const response = await rendez_vous.find({id_user:req.info_compte._id}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}


module.exports.find = async(req,res)=>{
    let Collection = [];
    const response = await rendez_vous.find({etat_rdv:false}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    
    for(i=0;i<response.length;i++){
        let a =  (req.info_compte.id_agence).toString()
        let b = (response[i].id_user.id_client.id_agence).toString()
        if(a.localeCompare(b) == 0){
            Collection.push(response[i])

        }
    }
    
    res.status(200).json(Collection);

}


module.exports.valider_rendez_vous =  async (req,res)=>{
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

module.exports.Annuler_rendez_vous =  async (req,res)=>{
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