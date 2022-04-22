const express = require("express")
const router = express.Router()
const {ajouter_categorie_client,afficher_la_liste_categorie,Archives_categorie_client,recherche_type_client} = require("../controllers/typeClient.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",ajouter_categorie_client)
router.get("/findall",afficher_la_liste_categorie)
router.delete('/delete/:id',Archives_categorie_client)
router.get("/recherche/:nom", recherche_type_client);




module.exports = router;


