const axios = require('axios')

exports.home = (req, res)=>{
    res.render('index')
}

exports.workers = (req , res) => {
    axios.get('http://localhost:3000/api/workers')
        .then(function(response){
            res.render('index_worker', {workers: response.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.transactions = (req , res) => {
    axios.get('http://localhost:3000/api/transactions')
        .then(function(response){
            res.render('index_transaction', {transactions: response.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.works = (req , res) => {
    axios.get('http://localhost:3000/api/works')
        .then(function(response){
            res.render('index_work', {works: response.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.worktypes = (req , res) => {
    axios.get('http://localhost:3000/api/worktypes')
        .then(function(response){
            res.render('index_worktype', {worktypes: response.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.add_worker = (req, res)=>{
    res.render('add_worker')
}

exports.add_transaction = (req, res)=>{
    res.render('add_transaction')
}

exports.add_work = (req, res)=>{
    res.render('add_work')
}

exports.add_worktype = (req, res)=>{
    res.render('add_worktype')
}

exports.update_worker = (req, res)=>{
    axios.get('http://localhost:3000/api/workers/',{params: {id: req.query.id}})
        .then(function(wdata){
            res.render('update_worker', {worker: wdata.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.update_transaction = (req, res)=>{
    axios.get('http://localhost:3000/api/transactions/',{params: {id: req.query.id}})
        .then(function(tdata){
            res.render('update_transaction', {transactions: tdata.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.update_work = (req, res)=>{
    axios.get('http://localhost:3000/api/works/',{params: {id: req.query.id}})
        .then(function(wdata){
            res.render('update_work', {works: wdata.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.update_worktype = (req, res)=>{
    axios.get('http://localhost:3000/api/worktypes/',{params: {id: req.query.id}})
        .then(function(wdata){
            res.render('update_worktype', {works: wdata.data})
    }).catch(e => {
        res.send(e)
    })
}