const mongoose = require('mongoose')
const usersSchema = require('../models/Users')

const User = mongoose.model('User', usersSchema)

const userController = {}



//List all users
userController.list = (req,res) => {
    User.find({}).exec((error, users) => {
        if(error){
            console.log('Error:', error)
        } else {
            res.send(users)
        }
    })
}


// create method
userController.save = (req, res)=>{
    
     let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
        
    }) 

    user.save((error)=>{
        if(error) {
            console.log(error)
            res.send(error)      
        } else{
            console.log('User was created');
            res.send(user)          
        }
    })
}

//show method
userController.show = (req, res)=>{
    User.findOne({_id: req.params.id}).exec((error, user)=>{
        if(error){
            console.log('Error:', error)
        } else {
            res.send(user)
        }
    
    })
}

//update
 userController.update = (req, res)=>{
    User.findByIdAndUpdate(req.params.id, {$set:{
        username:req.body.username,
        email: req.body.email,
        password: req.body.password,
        updated_at: req.body.updated_at
    }}, { new: true}, (error, user)=>{
        if(error) {
            console.log(error)
            res.status(400);
            res.send({error: 'None shall pass'});
                 
        } else{

           res.send(user)
            
        }
    })
    } 
  
    //delete
  userController.delete = (req,res)=>{
    User.deleteOne({_id: req.params.id}, (error) => {
        if(error) {
            console.log(error)
            
                 
        } else{
           console.log('User deleted');
            res.send('users/list') 
           
            
        }
    })
} 
 

module.exports = userController;  