const express = require("express")
const router = express.Router()
const {find_compte_user,dernier_virement_envoyer,dernier_virement_recu,find_user_state,recherche_compte,virement_recu,virement_envoyer,filter_virement_envoyer,filter_virement_recu} = require("../controllers/ChargeClientele")


router.get('/user/:id',find_compte_user)
router.get('/dernier/envoyer/:id',dernier_virement_envoyer)
router.get('/dernier/recu/:id',dernier_virement_recu)
router.get('/user/stat/:id',find_user_state);
router.get("/recherche/compte/:cin", recherche_compte);
router.get('/virement/recu/:id',virement_recu)
router.get('/virement/envoyer/:id',virement_envoyer)
router.post('/virement/filter/envoyer/:id',filter_virement_envoyer)
router.post('/virement/filter/recu/:id',filter_virement_recu)

module.exports = router;


