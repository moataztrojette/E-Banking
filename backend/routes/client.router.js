const express = require("express")
const router = express.Router()
const {inscription,connexion,deconnexion,findCompte,findall,changePassword} = require("../controllers/client.c")
const { isLogin } = require("../middleware/auth")


router.post('/inscription',inscription)
router.post('/connexion',connexion)
router.post('/deconnexion',deconnexion)
router.get('/profil',isLogin,findCompte)
router.get('/find',findall)
router.post('/password',isLogin,changePassword)


module.exports = router;


