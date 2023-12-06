const mongoose = require('mongoose')

const Schema = mongoose.Schema

const groupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    groupDetails: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    peopleCount: {
        type: Number,
        required: true
    },
    peopleInGroup: {
        type: Array,
        required: true
    },
    profilePicture: {
        type: String,
        required: false
    }




}, {timestamps: true})

module.exports = mongoose.model('Group', groupSchema)