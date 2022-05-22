const axios = require('axios')


exports.homeRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/workers')
        .then(function(response){
            res.render('index', {workers: response.data})
    }).catch(e => {
        res.send(e)
    })
}

exports.add_worker = (req, res)=>{
    res.render('add_worker')
}

exports.update_worker = (req, res)=>{
    axios.get('http://localhost:3000/api/workers/',{params: {id: req.query.id}})
        .then(function(wdata){
            res.render('update_worker', {worker: wdata.data})
    }).catch(e => {
        res.send(e)
    })
}