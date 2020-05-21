const express = require('express')
const routes = express.Router()

const userController = require('./controllers/UserController')
const projectController = require('./controllers/ProjectController')

routes.get('/users', userController.index)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

//Project Routes

routes.get('/projects', projectController.index)

module.exports = routes;