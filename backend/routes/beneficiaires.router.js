const express = require("express")
const router = express.Router()
const {ajouter_beneficiaire,findAll,archiver_beneficiaire} = require("../controllers/beneficiaires.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,ajouter_beneficiaire)
router.get("/find",isLogin,findAll)
router.delete('/delete/:id',archiver_beneficiaire)




module.exports = router;


