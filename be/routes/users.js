const express = require('express');
const route = express.Router()
const userController = require('../controller/users')

route.get('/', userController.getUser)
route.post('/', userController.postUser)

module.exports = route