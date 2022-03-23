const express = require("express")
const router = express.Router()
const {add,find_transaction,dernier_virement_envoyer,dernier_virement_recu,virement_envoyer,virement_recu,filter_virement_envoyer,filter_virement_recu} = require("../controllers/virement.c")
const { isLogin } = require("../middleware/auth")


router.post('/add',isLogin,add)
router.get('/historique',isLogin,find_transaction)
router.get('/dernier/envoyer',isLogin,dernier_virement_envoyer)
router.get('/dernier/recu',isLogin,dernier_virement_recu)
router.get('/recu',isLogin,virement_recu)
router.get('/envoyer',isLogin,virement_envoyer)
router.post('/filter/envoyer',isLogin,filter_virement_envoyer)
router.post('/filter/recu',isLogin,filter_virement_recu)



module.exports = router;


