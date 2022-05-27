var Workdb = require('../model/Work')

exports.create = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Content can not be empty'})
    }

    const work = new Workdb({
        StartDate: req.body.StartDate,
        EndDate: req.body.EndDate,
        WorkersCount: req.body.WorkersCount
    })

    work.save(work).then(data=>{
            //res.send(data)
            res.redirect('/add_work')
        })
        .catch(e=>{
            res.status(500).send({message: e.message || "Some error occurred while creating a create operation!"})
        })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

        Workdb.findById(id).then(data => {
            if(!data){
                res.status(404).send({message: 'Cannot find work with' + id + '. Maybe work not found!'})
            }else{
                res.send(data)
            }
        }).catch(e => {
            res.status(500).send({message: 'Error update worker information!'})
        })

    }else{
        Workdb.find().then(work => {
            res.send(work)        
        }).catch(e => {
            res.status(500).send({message: e.message || "Error occurred while retriving work information!"})
        })
    }
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data to update can not be empty!'})
    }

    const id = req.params.id
    Workdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot update work with' + id + '. Maybe work not found!'})
        }else{
            res.send(data)
        }
    }).catch(e => {
        res.status(500).send({message: 'Error update work information!'})
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    Workdb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot delete work with' + id + '. Maybe work not found!'})
        }else{
            res.send({message: 'Work was deleted successfully!'})
        }
    }).catch(e => {
        res.status(500).send({message: 'Could not delete work with id =' + id})
    })
}