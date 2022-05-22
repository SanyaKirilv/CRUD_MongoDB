const express = require('express');
const route = express.Router(); 

const services = require('../services/render')
const controller = require('../controller/WorkerController')

route.get('/', services.homeRoutes)

route.get('/add_worker', services.add_worker)

route.get('/update_worker', services.update_worker)

//API
route.post('/api/workers', controller.create)
route.get('/api/workers', controller.find)
route.put('/api/workers/:id', controller.update)
route.delete('/api/workers/:id', controller.delete)

module.exports = route