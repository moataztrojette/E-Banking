const demande_carte_bancaire = require("../models/demande_carte_bancaire.model")

module.exports.demande_carte_bancaire = async (req,res)=>{
    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    const dataFull = year+"-"+month+"-"+date

    const response = await demande_carte_bancaire.findOne({id_user : req.info_compte._id , id_type_carte : req.body.id_type_carte })
    if(response){
        return res.status(422).send("Impossible de faire une demande pour le meme carte ")
    }
    else{
        const response =  new demande_carte_bancaire({
            date : dataFull,
            id_user : req.info_compte._id,
            id_type_carte : req.body.id_type_carte
        })
        await response.save();

        res.status(200).send(response)

    }
      
}
