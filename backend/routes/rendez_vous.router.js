const express = require("express")
const router = express.Router()
const {add,liste_rdv,find,update_rdv,remove} = require("../controllers/rendez_vous.c")
const { isLogin } = require("../middleware/auth")


router.post("/add",isLogin,add)
router.get('/liste',isLogin,liste_rdv);
router.get('/find',find);
router.post('/update/:id',update_rdv);
router.delete("/delete/:id", remove);



module.exports = router;


