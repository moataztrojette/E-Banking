const express = require("express")
const router = express.Router()
const {valider_demande_carte_bancaire,consulter_resultat_demande_carte,consulter_les_carte_bancaires_par_client,consulter_les_cartes_bancaires_validé} = require("../controllers/carte_bancaire.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,valider_demande_carte_bancaire)
router.get("/find/:id",isLogin,consulter_resultat_demande_carte)
router.get("/liste",isLogin,consulter_les_carte_bancaires_par_client)
router.get("/valider/:id",consulter_les_cartes_bancaires_validé)



module.exports = router;



