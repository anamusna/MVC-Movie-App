const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: '',
        unique: true,
        trim: true
    },
    director:{
        type: String,
    },
    genre:{
        type: String
    },
    description:{
        type: String,
        trim: true
    },
    rating:{
        type: Number,
    },
    updated_at:{
        type: Date,
        default: Date.now
    }



})

module.exports = movieSchema