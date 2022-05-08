const Taux = require("../models/taux.model")

module.exports.simulateurCredit = async (req,res)=>{

    const data = await Taux.findOne({}).select("taux -_id")

    const taux = ((parseFloat(data.taux)/parseFloat(100))+1)*parseInt(req.body.montant)
    const Totale = parseFloat(taux)/((req.body.periode)*12)
    const response = Math.round(parseFloat(Totale) * 1000) / 1000

    res.json(response) 

}