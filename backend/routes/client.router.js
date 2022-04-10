const express = require("express")
const router = express.Router()
const {update_donnees_person,find_client,find_client_agence,find_client_type} = require("../controllers/client.c")
const { isLogin } = require("../middleware/auth")

router.put('/update/:id',update_donnees_person)
router.get('/find',isLogin,find_client)
router.get('/agence/find/:id',find_client_agence)
router.get('/type/find/:id',find_client_type)



module.exports = router;


