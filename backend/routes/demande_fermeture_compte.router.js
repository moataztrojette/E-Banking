const express = require("express")
const router = express.Router()
const {add,demandes,état_compte_activer,état_compte_desactiver} = require("../controllers/demande_fermeture_compte.c")
const { isLogin } = require("../middleware/auth")

router.post("/add",isLogin,add)
router.get("/find",demandes)
router.post('/desactiver/:id',état_compte_desactiver)
router.post('/activer/:id',état_compte_activer)

module.exports = router;


