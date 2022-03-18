const express = require("express")
const router = express.Router()
const {add,find_transaction,find_transaction_last,find_transaction_recu} = require("../controllers/virement.c")
const { isLogin } = require("../middleware/auth")


router.post('/add',isLogin,add)
router.get('/historique',isLogin,find_transaction)
router.get('/lastHistorique',isLogin,find_transaction_last)
router.get('/recu',isLogin,find_transaction_recu)


module.exports = router;


