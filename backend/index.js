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
const rendez_vous = require("./routes/rendez_vous.router");
const admin = require("./routes/admin.router");
const DemandeFermetureCompte = require("./routes/demande_fermeture_compte.router");
const client = require("./routes/client.router")


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
app.use("/api/rdv",rendez_vous)
app.use("/api/admin",admin)
app.use("/api/cdc",cdc)
app.use("/api/demande/fermeture",DemandeFermetureCompte)
app.use("/api/client",client)












app.listen(4000,()=>{
  console.log("Listening on port 4000");
})