const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    description: {
        type: String,
    },
    img: [{
        type: Array
    }],
    vote: {
        type: Number,
    },
    filter: [{
        type: Number
    }]
})

module.exports = mongoose.model('projects', projectSchema)