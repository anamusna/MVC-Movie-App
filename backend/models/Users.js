const mongoose = require('mongoose')
 


const usersSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Title field is required'],
        unique: true,
        trim: true
    },
    email:{
        type: String,
    },
    password:{
        type: String
    },
   
})

 
module.exports =  usersSchema