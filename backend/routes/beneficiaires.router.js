const express = require("express")
const router = express.Router()
const {add,findAll,remove} = require("../controllers/beneficiaires.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",add)
router.get("/find",findAll)
router.delete('/delete/:id',remove)




module.exports = router;


