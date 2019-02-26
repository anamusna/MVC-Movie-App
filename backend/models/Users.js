const mongoose = require('mongoose')
 


const usersSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: [true, 'name field is required'],
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        
    },
    username:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
   
})

 
module.exports = mongoose.model('User', usersSchema);