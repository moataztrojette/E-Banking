const express = require("express")
const router = express.Router()
const {valider_carnet_chéque_bancaire,consulter_resultat_demande,Consulter_les_carnets_chéques_validées_par_cdc} = require("../controllers/carnet_cheque.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,valider_carnet_chéque_bancaire)
router.get("/find/:id",isLogin,consulter_resultat_demande)
router.get("/valider/:id",Consulter_les_carnets_chéques_validées_par_cdc)


module.exports = router;

