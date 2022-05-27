const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    Name:{
        type: String,
        required: true,
        unique: true
    },
    Pay:{
        type: Number,
        required: true
    }
})

const WorkTypedb = mongoose.model('WorkType', schema)

module.exports = WorkTypedb