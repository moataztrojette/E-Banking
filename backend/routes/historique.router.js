const express = require("express")
const router = express.Router()
const {find_montant,find_user_state_ac} = require("../controllers/historique.c")
const { isLogin } = require("../middleware/auth")

router.get('/find',isLogin,find_montant);
router.get('/user/stat/:id',find_user_state_ac);


module.exports = router;


