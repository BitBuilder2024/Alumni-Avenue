const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        required: true
    },
    graduationYear: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    },   
    career: {
        type: String,
        required: true
    },
    jobPosition: {
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
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