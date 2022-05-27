const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    StartDate:{
        type: Date,
        required: true
    },
    EndDate:{
        type: Date,
        required: true
    },
    WorkersCount:{
        type: Number,
        required: true
    }
})

const Workdb = mongoose.model('Work', schema)

module.exports = Workdb