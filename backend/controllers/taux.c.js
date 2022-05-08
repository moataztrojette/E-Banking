const taux = require("../models/taux.model")


module.exports.ajouter_taux = async (req,res )=>{
   await taux.deleteMany()
       const response =  new taux({
           taux : req.body.taux
       })
       await response.save()
       res.status(200).send(response)
  


}

module.exports.taux = async (req,res )=>{
 const data = await taux.findOne({}).select("taux -_id")
 res.json(data)
   
 
 
 }
