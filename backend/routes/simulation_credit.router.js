const express = require("express")
const router = express.Router()
const {simulateurCredit} = require("../controllers/simulation_credit.c")
const { isLogin } = require("../middleware/auth")


router.post("/",simulateurCredit)


module.exports = router;


