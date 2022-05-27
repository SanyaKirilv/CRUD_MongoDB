var WorkTypedb = require('../model/WorkType')

exports.create = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Content can not be empty'})
    }

    const worktype = new WorkTypedb({
        Name: req.body.Name,
        Pay: req.body.Pay
    })

    worktype.save(worktype).then(data=>{
            //res.send(data)
            res.redirect('/add_worktype')
        })
        .catch(e=>{
            res.status(500).send({message: e.message || "Some error occurred while creating a create operation!"})
        })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

        WorkTypedb.findById(id).then(data => {
            if(!data){
                res.status(404).send({message: 'Cannot find worktype with' + id + '. Maybe worktype not found!'})
            }else{
                res.send(data)
            }
        }).catch(e => {
            res.status(500).send({message: 'Error update worktype information!'})
        })

    }else{
        WorkTypedb.find().then(worktype => {
            res.send(worktype)        
        }).catch(e => {
            res.status(500).send({message: e.message || "Error occurred while retriving worktype information!"})
        })
    }
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data to update can not be empty!'})
    }

    const id = req.params.id
    WorkTypedb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot update worktype with' + id + '. Maybe worktype not found!'})
        }else{
            res.send(data)
        }
    }).catch(e => {
        res.status(500).send({message: 'Error update worktype information!'})
    })

}

exports.delete = (req, res) => {
    const id = req.params.id
    WorkTypedb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot delete work with' + id + '. Maybe work not found!'})
        }else{
            res.send({message: 'Work was deleted successfully!'})
        }
    }).catch(e => {
        res.status(500).send({message: 'Could not delete work with id =' + id})
    })
}