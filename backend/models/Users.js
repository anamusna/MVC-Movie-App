const mongoose = require('mongoose')
 


const usersSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Title field is required'],
        unique: true,
        trim: true
    },
    email:{
        type: String,
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
   
})

 
module.exports =  usersSchema