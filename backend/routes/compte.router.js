const express = require("express")
const router = express.Router()
const {Créer_comptes_utilisateurs,se_connecter,se_deconnecter,consulter_informations_personnelles,consulter_les_comptes_bancaires,modifier_mot_de_passe,recherche_compte_ac,consulter_releves_compte_client_cdc,fermer_compte,activer_compte,consulter_les_comptes_par_agence,chercher_compte_par_mot_cle_cdc,Consulter_les_comptes_crées_par_cdc,consulter_comptes,Récupérer_votre_compte,Récupérer_modifier_mot_de_passe} = require("../controllers/compte.c")
const { isLogin } = require("../middleware/auth")


router.post('/inscription',isLogin,Créer_comptes_utilisateurs)
router.post('/connexion',se_connecter)
router.post('/deconnexion',se_deconnecter)
router.get('/profil',isLogin,consulter_informations_personnelles)
router.get('/client/:id',consulter_comptes)
router.get('/find',consulter_les_comptes_bancaires)
router.post('/password',isLogin,modifier_mot_de_passe)
router.get("/recherche/:cin", recherche_compte_ac);
router.get('/user/:id',consulter_releves_compte_client_cdc)
router.post('/desactiver/:id',fermer_compte)
router.post('/activer/:id',activer_compte)
router.post('/agence/find/',isLogin,consulter_les_comptes_par_agence)
router.get("/cdc/recherche/:cin", isLogin,chercher_compte_par_mot_cle_cdc);
router.get("/creer/cdc/:id",Consulter_les_comptes_crées_par_cdc)
router.post("/mot_de_passe/oublier",Récupérer_votre_compte)
router.post("/change/password/:id",Récupérer_modifier_mot_de_passe)

module.exports = router;


