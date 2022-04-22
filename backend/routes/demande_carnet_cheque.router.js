const express = require("express")
const router = express.Router()
const {demande_carnet_cheque,consulter_les_carnet_cheques,consulter_les_demande_carnet_cheque_par_agence} = require("../controllers/demande_carnet_cheque.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,demande_carnet_cheque)
router.get('/liste',isLogin,consulter_les_carnet_cheques);
router.get('/find',isLogin,consulter_les_demande_carnet_cheque_par_agence);




module.exports = router;


