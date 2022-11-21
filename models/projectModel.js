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
    img: {
        type: String
    },
    vote: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('projects', projectSchema)