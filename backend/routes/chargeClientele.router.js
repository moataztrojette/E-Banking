const express = require("express")
const router = express.Router()
const {findCompte,inscription,connexion,deconnexion,recherche_compte_ac} = require("../controllers/chargeClientele")
const { isLogin } = require("../middleware/auth")


router.get('/profil',isLogin,findCompte)
router.post('/inscription',inscription)
router.post('/connexion',connexion)
router.post('/deconnexion',deconnexion)



module.exports = router;


