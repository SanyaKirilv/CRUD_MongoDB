const express = require('express');
const route = express.Router(); 

const services = require('../services/render')
const worker_controller = require('../controller/WorkerController')
const transaction_controller = require('../controller/TransactionController')
const work_controller = require('../controller/WorkController')
const worktype_controller = require('../controller/WorkTypeController')

route.get('/', services.home)

route.get('/workers', services.workers)
route.get('/transactions', services.transactions)
route.get('/works', services.works)
route.get('/worktypes', services.worktypes)

route.get('/add_worker', services.add_worker)
route.get('/add_transaction', services.add_transaction)
route.get('/add_work', services.add_work)
route.get('/add_worktype', services.add_worktype)

route.get('/update_worker', services.update_worker)
route.get('/update_transaction', services.update_transaction)
route.get('/update_work', services.update_work)
route.get('/update_worktype', services.update_worktype)

route.post('/api/workers', worker_controller.create)
route.get('/api/workers', worker_controller.find)
route.put('/api/workers/:id', worker_controller.update)
route.delete('/api/workers/:id', worker_controller.delete)

route.post('/api/transactions', transaction_controller.create)
route.get('/api/transactions', transaction_controller.find)
route.put('/api/transactions/:id', transaction_controller.update)
route.delete('/api/transactions/:id', transaction_controller.delete)

route.post('/api/works', work_controller.create)
route.get('/api/works', work_controller.find)
route.put('/api/works/:id', work_controller.update)
route.delete('/api/works/:id', work_controller.delete)

route.post('/api/worktypes', worktype_controller.create)
route.get('/api/worktypes', worktype_controller.find)
route.put('/api/worktypes/:id', worktype_controller.update)
route.delete('/api/worktypes/:id', worktype_controller.delete)

module.exports = route