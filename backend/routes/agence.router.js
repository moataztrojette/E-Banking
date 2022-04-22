const express = require("express")
const router = express.Router()
const {ajouter_agence,consulter_les_agences,remove,cherche_agence} = require("../controllers/agence.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",ajouter_agence)
router.get("/findall",consulter_les_agences)
router.delete('/delete/:id',remove)
router.get("/recherche/:nom", cherche_agence);




module.exports = router;


