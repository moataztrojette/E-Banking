const express = require("express")
const app = express();
const cors = require("cors")

const env = require('dotenv')
const cookieSession = require('cookie-session')

const compte = require("./routes/compte.router");
const virement = require("./routes/virement.router");
const historique = require("./routes/historique.router");
const beneficiaire = require("./routes/beneficiaires.router");
const cdc = require("./routes/chargeClientele.router");
const demande_rendez_vous = require("./routes/demande_rendez_vous.router");
const admin = require("./routes/admin.router");
const DemandeFermetureCompte = require("./routes/demande_fermeture_compte.router");
const client = require("./routes/client.router")
const agence = require("./routes/agence.router")
const typeClient = require("./routes/typeClient.router")
const demande_carnet_cheque = require("./routes/demande_carnet_cheque.router")
const carnet_cheque = require("./routes/carnet_cheque.router")
const rendez_vous = require("./routes/rendez_vous.router")
const proposition_rendez_vous = require("./routes/proposition.router")
const type_carte_bancaire = require("./routes/type_carte_bancaire.router")
const demande_carte_bancaire = require("./routes/demande_carte_bancaire.router")
const carte_bancaire = require("./routes/carte_bancaire.router")

env.config()
app.use(cors({ origin: "http://localhost:3000",credentials:true }));
app.use(express.json())
app.use(cookieSession({
  name : 'EB',
  keys : ['EB_key'],
}))



require("./DB/setup")()
app.use("/api/compte",compte)
app.use("/api/virement",virement)
app.use("/api/historique",historique)
app.use("/api/beneficiaire",beneficiaire)
app.use("/api/demande/rdv",demande_rendez_vous)
app.use("/api/admin",admin)
app.use("/api/cdc",cdc)
app.use("/api/demande/fermeture",DemandeFermetureCompte)
app.use("/api/client",client)
app.use("/api/agence",agence)
app.use("/api/type/client",typeClient)
app.use("/api/demande/carnet",demande_carnet_cheque)
app.use("/api/carnet",carnet_cheque)
app.use("/api/rdv",rendez_vous)
app.use("/api/proposition/rdv",proposition_rendez_vous)
app.use("/api/type/carte",type_carte_bancaire)
app.use("/api/demande/carte",demande_carte_bancaire)
app.use("/api/carte/bancaire",carte_bancaire)





















app.listen(4000,()=>{
  console.log("Listening on port 4000");
})