const express = require("express")
const router = express.Router()
const {Faire_des_virements_bancaires,Consulter_historique_des_transactions_bancaires,dernier_virements_envoyés,dernier_virements_reçus,liste_virements_envoyés,liste_virements_reçus,Filtrer_les_virements_bancaires_envoyés,Filtrer_les_virements_bancaires_reçus,find_compte_user_ac,dernier_virements_envoyés_ac,dernier_virements_reçus_ac,find_user_state_ac,liste_virements_reçus_ac,liste_virements_envoyés_ac,filter_virements_envoyés_ac,filter_virements_reçus_ac,generate_code,check_rib,liste_virements_envoyés_par_personne,les_bénéficiaires} = require("../controllers/virement.c")
const { isLogin } = require("../middleware/auth")


router.post('/add',isLogin,Faire_des_virements_bancaires)
router.get('/historique',isLogin,Consulter_historique_des_transactions_bancaires)
router.get('/dernier/envoyer',isLogin,dernier_virements_envoyés)
router.get('/dernier/recu',isLogin,dernier_virements_reçus)
router.get('/recu',isLogin,liste_virements_reçus )
router.get('/envoyer',isLogin,liste_virements_envoyés)
router.post('/filter/envoyer',isLogin,Filtrer_les_virements_bancaires_envoyés)
router.post('/filter/recu',isLogin,Filtrer_les_virements_bancaires_reçus)
router.get('/envoyer/liste/:id',isLogin,liste_virements_envoyés_par_personne)
router.get('/beneficiaires',isLogin,les_bénéficiaires)


router.get('/dernier/envoyer/:id',dernier_virements_envoyés_ac)
router.get('/dernier/recu/:id',dernier_virements_reçus_ac)
router.get('/recu/:id',liste_virements_reçus_ac)
router.get('/envoyer/:id',liste_virements_envoyés_ac)
router.post('/filter/envoyer/:id',filter_virements_envoyés_ac)
router.post('/filter/recu/:id',filter_virements_reçus_ac)
router.post('/code-generator',isLogin,generate_code)
router.get('/check-rib',isLogin,check_rib)

module.exports = router;


