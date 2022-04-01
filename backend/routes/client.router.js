const express = require("express")
const router = express.Router()
const {inscription,connexion,deconnexion,findCompte,findall,changePassword,recherche_compte_ac,find_compte_user_ac} = require("../controllers/client.c")
const { isLogin } = require("../middleware/auth")


router.post('/inscription',isLogin,inscription)
router.post('/connexion',connexion)
router.post('/deconnexion',deconnexion)
router.get('/profil',isLogin,findCompte)
router.get('/find',findall)
router.post('/password',isLogin,changePassword)
router.get("/recherche/:cin", recherche_compte_ac);
router.get('/user/:id',find_compte_user_ac)


module.exports = router;


