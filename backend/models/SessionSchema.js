const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
 


const SessionSchema = new mongoose.Schema({

    

    uuid:{
        type: String,
        required: [true, 'name field is required'],
        unique: true,
        trim: true
    },
    user_id:{
        type: mongoose.Schema.ObjectId,
    }
   
})

 
 

module.exports =  SessionSchema;