var Workerdb = require('../model/Worker')

exports.create = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Content can not be empty'})
    }

    const worker = new Workerdb({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        MiddleName: req.body.MiddleName,
        Salary: req.body.Salary,
        Email: req.body.Email
    })

    worker.save(worker).then(data=>{
            //res.send(data)
            res.redirect('/add_worker')
        })
        .catch(e=>{
            res.status(500).send({message: e.message || "Some error occurred while creating a create operation!"})
        })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

        Workerdb.findById(id).then(data => {
            if(!data){
                res.status(404).send({message: 'Cannot find worker with' + id + '. Maybe worker not found!'})
            }else{
                res.send(data)
            }
        }).catch(e => {
            res.status(500).send({message: 'Error update worker information!'})
        })

    }else{
        Workerdb.find().then(worker => {
            res.send(worker)        
        }).catch(e => {
            res.status(500).send({message: e.message || "Error occurred while retriving worker information!"})
        })
    }
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data to update can not be empty!'})
    }

    const id = req.params.id
    Workerdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot update worker with' + id + '. Maybe worker not found!'})
        }else{
            res.send(data)
        }
    }).catch(e => {
        res.status(500).send({message: 'Error update worker information!'})
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    Workerdb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot delete worker with' + id + '. Maybe worker not found!'})
        }else{
            res.send({message: 'Worker was deleted successfully!'})
        }
    }).catch(e => {
        res.status(500).send({message: 'Could not delete worker with id =' + id})
    })
}