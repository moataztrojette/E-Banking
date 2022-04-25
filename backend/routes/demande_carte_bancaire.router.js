const express = require("express")
const router = express.Router()
const {demande_carte_bancaire,consulter_les_demande_cartes_bancaire_par_agence,refuser_demande_carte_bancaire,consulter_les_demande_de_carte_bancaire} = require("../controllers/demande_carte_bancaire.c")
const { isLogin } = require("../middleware/auth")

router.post("/add",isLogin,demande_carte_bancaire)
router.get('/find',isLogin,consulter_les_demande_cartes_bancaire_par_agence);
router.post("/refuser/:id",isLogin,refuser_demande_carte_bancaire)
router.get('/liste',isLogin,consulter_les_demande_de_carte_bancaire);



module.exports = router;


