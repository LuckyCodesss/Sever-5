const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    bio: {
        type: String
    },
    project: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "project"
        }
    ]
})

module.exports = mongoose.model('users', userSchema)