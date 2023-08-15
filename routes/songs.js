const Controller = require("../controllers")

const router = require("express").Router()

router.get('/', Controller.songsList)
router.get('/add', Controller.songsAdd)
router.post('/add', Controller.songsStore)

module.exports = router