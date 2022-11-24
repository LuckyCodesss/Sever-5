const mongoose = require('mongoose');

const readSchema = new mongoose.Schema({
    pic: {
        type: String
    },
    toolIcon: {
        type: String,
    },
    description: {
        type: String,
    },
})

module.exports = mongoose.model('reads', readSchema)