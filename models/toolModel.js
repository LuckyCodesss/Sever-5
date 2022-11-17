const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    toolName: {
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

module.exports = mongoose.model('Tool', toolSchema)