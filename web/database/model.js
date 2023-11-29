const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String,
    email: String,
    flag: String,
    createAt: String
})

module.exports = mongoose.model('user', Schema);