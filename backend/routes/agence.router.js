const express = require("express")
const router = express.Router()
const {add,findAll,remove,recherche_agence} = require("../controllers/agence.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",add)
router.get("/findall",findAll)
router.delete('/delete/:id',remove)
router.get("/recherche/:nom", recherche_agence);




module.exports = router;


