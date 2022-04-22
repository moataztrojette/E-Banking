const express = require("express")
const router = express.Router()
const {se_connecter,se_deconnecter} = require("../controllers/admin.c")

router.post("/connexion",se_connecter)
router.post('/deconnexion',se_deconnecter)

module.exports = router;


