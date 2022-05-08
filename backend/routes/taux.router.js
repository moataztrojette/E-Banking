const express = require("express")
const router = express.Router()
const {ajouter_taux,taux} = require("../controllers/taux.c")
const { isLogin } = require("../middleware/auth")


router.post("/",ajouter_taux)
router.get("/",taux)

module.exports = router;


