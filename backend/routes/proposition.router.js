const express = require("express")
const router = express.Router()
const {proposition_rendez_vous,consulter_resultat_proposition_rdv} = require("../controllers/proposition_rdv.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,proposition_rendez_vous)
router.get("/find/:id",isLogin,consulter_resultat_proposition_rdv)


module.exports = router;


