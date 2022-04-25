const rendez_vous = require("../models/demande_rendez_vous.model")

module.exports.demande_rendez_vous = async (req,res)=>{

    const response = await rendez_vous.findOne({date : req.body.date , id_user : req.info_compte._id })
    if(response){
        return res.status(422).send("Impossible de prendre deux rendez-vous au meme jour")
    }
    else{
        const response =  new rendez_vous({
            date : req.body.date,
            heure : req.body.heure,
            motif : req.body.motif,
            id_user : req.info_compte._id,
            etat_demande:"en attente"


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


module.exports.consulter_les_demande_de_rendez_vous_en_attente_par_agence = async(req,res)=>{
    let Collection = [];
    const response = await rendez_vous.find({etat_demande:"en attente"}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    
    for(i=0;i<response.length;i++){
        let a =  (req.info_compte.id_agence).toString()
        let b = (response[i].id_user.id_client.id_agence).toString()
        if(a.localeCompare(b) == 0){
            Collection.push(response[i])

        }
    }
    
    res.status(200).json(Collection);

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