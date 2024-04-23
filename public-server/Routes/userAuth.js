const {Router} = require('express')
const router = Router();
const USER = require('../Models/user')
const {handleLogin, handelRegestration} = require('../Controllers/userAuth')
router.post('/registration',handelRegestration)
router.post('/login', handleLogin)
module.exports = router
