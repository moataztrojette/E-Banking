const express = require("express")
const router = express.Router()
const {add,findAll,remove,recherche_type_client} = require("../controllers/typeClient.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",add)
router.get("/findall",findAll)
router.delete('/delete/:id',remove)
router.get("/recherche/:nom", recherche_type_client);




module.exports = router;


