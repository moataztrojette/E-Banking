const express = require("express")
const router = express.Router()
const {update_donnees_person,find_client,suivre_les_clients_de_chaque_agences,consulter_les_client_par_categorie,consulter_les_cdc} = require("../controllers/client.c")
const { isLogin } = require("../middleware/auth")

router.put('/update/:id',update_donnees_person)
router.get('/find',isLogin,find_client)
router.get('/agence/find/:id',suivre_les_clients_de_chaque_agences)
router.get('/type/find/:id',consulter_les_client_par_categorie)
router.get('/find/cdc',isLogin,consulter_les_cdc)



module.exports = router;


