const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    toolName: {
        type: String,
    },
    description: {
        type: String,
    },
    picIcon: {
        type: String
    },
    vote: {
        type: Number,
    }
})

module.exports = mongoose.model('tools', toolSchema)