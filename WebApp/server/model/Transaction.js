const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    WorkerEmail:{
        type: String,
        required: true
    },
    WorkID:{
        type: Number,
        required: true
    },
    WorkType:{
        type: String,
        required: true
    }
})

const Transactiondb = mongoose.model('Transaction', schema)

module.exports = Transactiondb