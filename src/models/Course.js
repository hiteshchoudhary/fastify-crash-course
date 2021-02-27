const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    price: String,
    subtitle: String,
    releaseYear: Number
})

module.exports = mongoose.model('Course', courseSchema);