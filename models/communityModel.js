const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    pic: {
        type: String
    },
    head: {
        type: String
    },
    description: {
        type: String
    },
    vote: {
        type: Number
    }
})

module.exports = mongoose.model('communitys', communitySchema)