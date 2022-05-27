var Transactiondb = require('../model/Transaction')

exports.create = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Content can not be empty'})
    }

    const transaction = new Transactiondb({
        WorkerEmail: req.body.WorkerEmail,
        WorkID: req.body.WorkID,
        WorkType: req.body.WorkType
    })

    transaction.save(transaction).then(data=>{
            //res.send(data)
            res.redirect('/add_transaction')
        })
        .catch(e=>{
            res.status(500).send({message: e.message || "Some error occurred while creating a create operation!"})
        })

}

exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id

        Transactiondb.findById(id).then(data => {
            if(!data){
                res.status(404).send({message: 'Cannot find transaction with' + id + '. Maybe transaction not found!'})
            }else{
                res.send(data)
            }
        }).catch(e => {
            res.status(500).send({message: 'Error update transaction information!'})
        })

    }else{
        Transactiondb.find().then(transaction => {
            res.send(transaction)        
        }).catch(e => {
            res.status(500).send({message: e.message || "Error occurred while retriving transaction information!"})
        })
    }
}

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message: 'Data to update can not be empty!'})
    }

    const id = req.params.id
    Transactiondb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot update transaction with' + id + '. Maybe transaction not found!'})
        }else{
            res.send(data)
        }
    }).catch(e => {
        res.status(500).send({message: 'Error update transaction information!'})
    })

}

//delete a Worker with specified WorkerID in the request
exports.delete = (req, res) => {
    const id = req.params.id
    Transactiondb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message: 'Cannot delete transaction with' + id + '. Maybe transaction not found!'})
        }else{
            res.send({message: 'Worker was deleted successfully!'})
        }
    }).catch(e => {
        res.status(500).send({message: 'Could not delete transaction with id =' + id})
    })
}