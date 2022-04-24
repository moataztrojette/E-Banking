const express = require("express")
const router = express.Router()
const {demande_carte_bancaire} = require("../controllers/demande_carte_bancaire.c")
const { isLogin } = require("../middleware/auth")

router.post("/add",isLogin,demande_carte_bancaire)


module.exports = router;


