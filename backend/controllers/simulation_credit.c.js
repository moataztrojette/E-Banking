const Taux = require("../models/taux.model")

module.exports.simulateurCredit = async (req,res)=>{

    const dataSimulateur = []
    const data = await Taux.findOne({}).select("taux -_id")

    const taux = ((parseFloat(data.taux)/parseFloat(100))*parseInt(req.body.montant))*req.body.periode
    const Totale = (parseFloat(req.body.montant)+taux)/((req.body.periode)*12)

    const l_echance = Math.round((Totale) * 1000) / 1000
    
    const Taux_d_Endettement_Mensuel = ((l_echance))/(req.body.salaire)*100
    const Taux_d_Endettement_Mensuel_totale=Math.round((Taux_d_Endettement_Mensuel) * 100) / 100

    dataSimulateur.push(l_echance)
    dataSimulateur.push(Taux_d_Endettement_Mensuel_totale)

    
    
    
    
    res.json({l_echance,Taux_d_Endettement_Mensuel_totale}) 

}