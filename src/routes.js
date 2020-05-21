const express = require('express')
const routes = express.Router()

const userController = require('./controllers/UserController')

routes.get('/users', userController.index)

module.exports = routes;