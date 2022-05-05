const demandeFerCompt = require("../models/demande_fermeture_compte.model")

module.exports.add = async (req,res)=>{
    const response = await demandeFerCompt.findOne({id_user : req.info_compte._id})
    if(response){
        return res.status(422).send("vous avez déjà fait une demande de fermeture  ")
    }
    else{
        let date_ob = new Date();
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
  
        const dataFull = year+"-"+month+"-"+date

        const response =  new demandeFerCompt({
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
     
    let Collection = [];
    const response = await demandeFerCompt.find({}).populate({path:"id_user",populate:{path:"id_client"}}).sort({_id: -1 });
    
    for(i=0;i<response.length;i++){
        let a =  (req.info_compte.id_agence).toString()
        let b = (response[i].id_user.id_client.id_agence).toString()
        if(a.localeCompare(b) == 0){
            Collection.push(response[i])

        }
    }
    
    res.status(200).json(Collection);
}


module.exports.état_compte_activer  =  async (req,res)=>{

    const response = await demandeFerCompt.findOneAndUpdate({_id:req.params.id},{
        isActive : true,
        },{
            new : true
        }).populate({path:"id_user",populate:{path:"id_client"}});
        res.json(response)
  
  }
  
  module.exports.état_compte_desactiver =  async (req,res)=>{
  
    const response = await demandeFerCompt.findOneAndUpdate({_id:req.params.id},{
        isActive : false,
        },{
            new : true
        }).populate({path:"id_user",populate:{path:"id_client"}});
        res.json(response)
  
  }
