const express = require("express")
const router = express.Router()
const {demande_rendez_vous,consulter_rendez_vous,consulter_les_demande_de_rendez_vous_en_attente_par_agence,remove,Annuler_rendez_vous} = require("../controllers/demande_rendez_vous.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,demande_rendez_vous)
router.get('/liste',isLogin,consulter_rendez_vous);
router.get('/find',isLogin,consulter_les_demande_de_rendez_vous_en_attente_par_agence);
router.post('/annuler/:id',Annuler_rendez_vous);
router.delete("/delete/:id", remove);



module.exports = router;


