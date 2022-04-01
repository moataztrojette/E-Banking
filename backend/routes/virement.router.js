const express = require("express")
const router = express.Router()
const {add,find_transaction,dernier_virement_envoyer,dernier_virement_recu,virement_envoyer,virement_recu,filter_virement_envoyer,filter_virement_recu,find_compte_user_ac,dernier_virement_envoyer_ac,dernier_virement_recu_ac,find_user_state_ac,virement_recu_ac,virement_envoyer_ac,filter_virement_envoyer_ac,filter_virement_recu_ac} = require("../controllers/virement.c")
const { isLogin } = require("../middleware/auth")


router.post('/add',isLogin,add)
router.get('/historique',isLogin,find_transaction)
router.get('/dernier/envoyer',isLogin,dernier_virement_envoyer)
router.get('/dernier/recu',isLogin,dernier_virement_recu)
router.get('/recu',isLogin,virement_recu)
router.get('/envoyer',isLogin,virement_envoyer)
router.post('/filter/envoyer',isLogin,filter_virement_envoyer)
router.post('/filter/recu',isLogin,filter_virement_recu)


router.get('/dernier/envoyer/:id',dernier_virement_envoyer_ac)
router.get('/dernier/recu/:id',dernier_virement_recu_ac)
router.get('/recu/:id',virement_recu_ac)
router.get('/envoyer/:id',virement_envoyer_ac)
router.post('/filter/envoyer/:id',filter_virement_envoyer_ac)
router.post('/filter/recu/:id',filter_virement_recu_ac)

module.exports = router;


