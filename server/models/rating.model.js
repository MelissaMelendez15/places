const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({

    rating: {
        type: Number
    },

    site: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Site'
    },

    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
})

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating