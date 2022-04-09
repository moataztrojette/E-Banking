const express = require("express")
const router = express.Router()
const {update_donnees_person,find_client} = require("../controllers/client.c")
const { isLogin } = require("../middleware/auth")

router.put('/update/:id',update_donnees_person)
router.get('/find',isLogin,find_client)


module.exports = router;


