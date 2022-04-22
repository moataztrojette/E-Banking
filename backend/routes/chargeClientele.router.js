const express = require("express")
const router = express.Router()
const {consulter_informations_personnelles,ajouter_compte,se_connecter,se_deconnecter,consulter_les_charges_clienteles_par_agence,chercher_cdc_par_mot_cle_cdc,consulter_les_charges_clienteles} = require("../controllers/chargeClientele")
const { isLogin } = require("../middleware/auth")
router.post('/connexion',se_connecter)
router.post('/deconnexion',se_deconnecter)
router.post('/inscription',ajouter_compte)
router.get('/profil',isLogin,consulter_informations_personnelles)
router.get('/agence/find/:id',consulter_les_charges_clienteles_par_agence)
router.get("/recherche/:prenom",chercher_cdc_par_mot_cle_cdc);
router.get('/find/:id',consulter_les_charges_clienteles)




module.exports = router;


