const express = require('express')
const authController = require('../controller/authController')
const testController = require('../controller/testController')


const router = express.Router()

router.route('/register').post(authController.signUp)

router.route('/login').post(authController.logIn)

router.route('/logout').get(authController.logout)

router.get('/test',testController.test1)

module.exports = router;