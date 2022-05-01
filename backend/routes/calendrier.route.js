const express = require('express')
const router = express.Router()
const { isLogin } = require("../middleware/auth")

const {ajouter_Tâche,tâches,supprimer_tâche} = require('../controllers/calendrier.c')

router.post('/post',isLogin,ajouter_Tâche)
router.get('/findall',isLogin,tâches)
router.post('/delete',isLogin,supprimer_tâche)


module.exports = router