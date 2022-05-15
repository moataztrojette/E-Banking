const express = require("express")
const router = express.Router()
const {update_donnees_person,find_client,suivre_les_clients_de_chaque_agences,consulter_les_client_par_categorie,Consulter_les_listes_de_chargés_de_clientèle,Consulter_listes_de_clients} = require("../controllers/client.c")
const { isLogin } = require("../middleware/auth")

router.put('/update/:id',update_donnees_person)
router.get('/find',isLogin,find_client)
router.get('/agence/find/:id',suivre_les_clients_de_chaque_agences)
router.get('/type/find/:id',consulter_les_client_par_categorie)
router.get('/find/cdc',isLogin,Consulter_les_listes_de_chargés_de_clientèle)
router.get('/findall',Consulter_listes_de_clients)



module.exports = router;


