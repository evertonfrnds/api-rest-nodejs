const express = require('express')
const routes = express.Router()

const userController = require('./controllers/UserController')
const projectController = require('./controllers/ProjectController')

routes
    //Users
    .get('/users', userController.index)
    .post('/users', userController.create)
    .put('/users/:id', userController.update)
    .delete('/users/:id', userController.delete)
    //Project
    .get('/projects', projectController.index)
    .post('/projects', projectController.create)
    .put('/projects/:id', projectController.update)

module.exports = routes;