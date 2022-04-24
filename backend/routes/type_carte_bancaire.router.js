const express = require("express")
const router = express.Router()
const {ajouter_type_carte_bancaire,consulter_les_type_de_cartes_bancaire,remove,consulter_type_de_carte_bancaire} = require("../controllers/type_carte_bancaire.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,ajouter_type_carte_bancaire)
router.get("/findall",consulter_les_type_de_cartes_bancaire)
router.get("/find/:id",consulter_type_de_carte_bancaire)

router.delete('/delete/:id',remove)


module.exports = router;


