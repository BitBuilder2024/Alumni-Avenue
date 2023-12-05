const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gradDate: {
        type: Number,
        required: true
    },
    fieldOfWorkOrInterest: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    currentEmployer: {
        type: String,
        required: false
    },
    currentEmploymentRole: {
        type: String,
        required: false
    },
    groupsJoined: {
        type: Array,
        required: false
    },
    groupsOwned: {
        type: Array,
        required: false
    }


}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)