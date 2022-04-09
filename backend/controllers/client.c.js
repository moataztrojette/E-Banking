const clients = require("../models/client.model")


module.exports.update_donnees_person =  async (req,res)=>{
  
    const response = await clients.findOneAndUpdate({_id:req.params.id},{
        email : req.body.email,
        tel : req.body.tel
        },{
            new : true
        })
        res.json(response)
  
  }

  module.exports.find_client = async(req,res)=>{
    const client = await clients.find({_id:req.info_compte.id_client})
    res.json(client);
}


