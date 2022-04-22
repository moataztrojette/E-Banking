const demande_carnet_cheques = require("../models/demande_carnet_cheque.model")

module.exports.demande_carnet_cheque = async (req,res)=>{
    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    const dataFull = year+"-"+month+"-"+date

    const response = await demande_carnet_cheques.findOne({date : dataFull , id_user : req.info_compte._id })
    if(response){
        return res.status(422).send("Impossible de faire deux demande pour le meme jour")
    }
    else{
        const response =  new demande_carnet_cheques({
            nb_carnet_cheque : req.body.nb_carnet_cheque,
            format : req.body.format,
            date : dataFull,
            id_user : req.info_compte._id,
            etat_demande : 'en attente'
        })
        await response.save();

        res.status(200).send(response)

    }
      
}

module.exports.consulter_les_carnet_cheques  = async(req,res)=>{
    const response = await demande_carnet_cheques.find({id_user:req.info_compte._id}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}

module.exports.consulter_les_demande_carnet_cheque_par_agence = async(req,res)=>{
    let Collection = [];
    const response = await demande_carnet_cheques.find({}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    
    for(i=0;i<response.length;i++){
        let a =  (req.info_compte.id_agence).toString()
        let b = (response[i].id_user.id_client.id_agence).toString()
        if(a.localeCompare(b) == 0){
            Collection.push(response[i])

        }
    }
    
    res.status(200).json(Collection);

}
