const express = require("express")
const router = express.Router()
const {demande_rendez_vous,consulter_rendez_vous,find,valider_rendez_vous,remove,Annuler_rendez_vous} = require("../controllers/rendez_vous.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,demande_rendez_vous)
router.get('/liste',isLogin,consulter_rendez_vous);
router.get('/find',isLogin,find);
router.post('/update/:id',valider_rendez_vous);
router.post('/rdv/:id',Annuler_rendez_vous);
router.delete("/delete/:id", remove);



module.exports = router;


