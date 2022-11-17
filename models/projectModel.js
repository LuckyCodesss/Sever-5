const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
    },
    description: {
        type: String,
    },
    picTool: {
        type: String
    },
    vote: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema)