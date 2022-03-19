const express = require("express")
const router = express.Router()
const {find_montant} = require("../controllers/historique.c")
const { isLogin } = require("../middleware/auth")

router.get('/find',isLogin,find_montant);


module.exports = router;


