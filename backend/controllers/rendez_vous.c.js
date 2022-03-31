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


        })
        await response.save();
        res.status(200).send(response)
}

module.exports.liste_rdv = async(req,res)=>{
    const response = await rendez_vous.find({id_user:req.info_compte._id}).sort({_id: -1 });
    res.status(200).json(response);
}


module.exports.find = async(req,res)=>{
    const response = await rendez_vous.find({}).populate("id_user").sort({_id: -1 });
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
        },{
            new : true
        }).populate("id_user")
        res.json(response)
    }
    

}


module.exports.remove = async (req,res)=>{
    await rendez_vous.findByIdAndRemove({_id : req.params.id})
    res.status(200).send("deleted")
}