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
    const client = await clients.find({_id:req.info_compte.id_client}).populate("id_agence")
    res.json(client);
}


module.exports.find_client_agence = async(req,res)=>{
    const client = await clients.find({id_agence:req.params.id}).populate("id_agence id_type_client")
    res.json(client);
}

module.exports.find_client_type = async(req,res)=>{
    const client = await clients.find({id_type_client:req.params.id}).populate("id_agence id_type_client")
    res.json(client);
}



module.exports.recherche_client = async (req, res) => {
    const res_recherche = await clients.find({id_agence:req.params.id ,
      cin: { $regex: req.params.nom, $options: "i" },
    })
    res.json(res_recherche);
  };