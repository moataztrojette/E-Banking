const demandeFerCompt = require("../models/demande_fermeture_compte.model")

module.exports.add = async (req,res)=>{
    const response = await demandeFerCompt.findOne({id_user : req.info_compte._id})
    if(response){
        return res.status(422).send("vous avez déjà fait une demande de rendez-vous")
    }
    else{
        let date_ob = new Date();
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
  
        const dataFull = year+"-"+month+"-"+date

        const response =  new demandeFerCompt({
            np :req.body.np,
            email : req.body.email,
            motif : req.body.motif,
            id_user : req.info_compte._id,
            isActive : true,
            date : dataFull

        })
        await response.save();
        res.status(200).send(response)
    }

}
module.exports.demandes = async(req,res)=>{
    const response = await demandeFerCompt.find({}).sort({_id: -1 }).populate("id_user");
    res.status(200).json(response);
}


module.exports.état_compte_activer  =  async (req,res)=>{

    const response = await demandeFerCompt.findOneAndUpdate({_id:req.params.id},{
        isActive : true,
        },{
            new : true
        })
        res.json(response)
  
  }
  
  module.exports.état_compte_desactiver =  async (req,res)=>{
  
    const response = await demandeFerCompt.findOneAndUpdate({_id:req.params.id},{
        isActive : false,
        },{
            new : true
        })
        res.json(response)
  
  }
