const express = require("express")
const router = express.Router()
const {valider_rendez_vous,consulter_resultat_demande_rdv,consulter_les_rendez_vous_valider} = require("../controllers/rendez_vous.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,valider_rendez_vous)
router.get("/find/:id",isLogin,consulter_resultat_demande_rdv)
router.get("/find",isLogin,consulter_les_rendez_vous_valider)


module.exports = router;


