const demande_carte_bancaire = require("../models/demande_carte_bancaire.model")

module.exports.demande_carte_bancaire = async (req,res)=>{
    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    const dataFull = year+"-"+month+"-"+date

    const response = await demande_carte_bancaire.findOne({id_user : req.info_compte._id , id_type_carte : req.body.id_type_carte })
    if(response){
        return res.status(422).send("Impossible de passer une demande avec la meme carte ")
    }
    else{
        const response =  new demande_carte_bancaire({
            date : dataFull,
            id_user : req.info_compte._id,
            id_type_carte : req.body.id_type_carte,
            etat_demande:"en attente"
        })
        await response.save();

        res.status(200).send(response)

    }
      
}

module.exports.consulter_les_demande_cartes_bancaire_par_agence = async(req,res)=>{
    let Collection = [];
    const response = await demande_carte_bancaire.find({}).populate({path:"id_user id_type_carte",populate:{path:"id_client"}}).sort({_id: -1 });
    
    for(i=0;i<response.length;i++){
        let a =  (req.info_compte.id_agence).toString()
        let b = (response[i].id_user.id_client.id_agence).toString()
        if(a.localeCompare(b) == 0){
            Collection.push(response[i])

        }
    }
    
    res.status(200).json(Collection);

}


module.exports.refuser_demande_carte_bancaire = async(req,res)=>{

    const response = await demande_carte_bancaire.findOneAndUpdate({_id:req.params.id},{
        etat_demande :"refuser",
        raison:req.body.raison
    },{
        new : true
    })
    await response.save()

}
module.exports.consulter_les_demande_de_carte_bancaire = async(req,res)=>{
    const response = await demande_carte_bancaire.find({id_user:req.info_compte._id}).populate({path:"id_user id_type_carte",populate:{path:"id_client"}}).sort({_id: -1 });
    res.status(200).json(response);
}

