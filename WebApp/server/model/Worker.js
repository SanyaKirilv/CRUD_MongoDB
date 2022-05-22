const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    MiddleName:{
        type: String,
        required: false
    },
    Salary:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    }
})

const Workerdb = mongoose.model('Worker', schema)

module.exports = Workerdb