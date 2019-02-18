const mongoose = require('mongoose');
const movieSchema = require('../models/Movies');


const Movie = mongoose.model('Movie', movieSchema)


const movieController = {}




//List all movies
movieController.list = (req,res) => {
    Movie.find({}).exec((error, movies) => {
        if(error){
            console.log('Error:', error)
        } else {
            res.send(movies)
        }
    })
}

// create method
movieController.save = (req, res)=>{
    console.log(req.file);
    
     let movie = new Movie({
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        description: req.body.description,
        rating: req.body.rating,
        image: req.file.path 
        
    }) 

    movie.save((error)=>{
        if(error) {
            console.log(error)
            res.send(error)      
        } else{
            console.log('Movie was created');
            res.send(movie)          
        }
    })
   
}


//show method
movieController.show = (req, res)=>{
    Movie.findOne({_id: req.params.id}).exec((error, movie)=>{
        if(error){
            console.log('Error:', error)
        } else {
            res.send(movie)
        }
    })
}

//update
 movieController.update = (req, res)=>{
    Movie.findByIdAndUpdate(req.params.id, {$set:{
        title:req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        description: req.body.description,
        rating: req.body.rating,
        updated_at: req.body.updated_at
    }}, { new: true}, (error, movie)=>{
        if(error) {
            console.log(error)
            res.status(400);
            res.send({error: 'None shall pass'});
                 
        } else{

           res.send(movie)
            
        }
    })
    } 
  
    //delete
    movieController.delete = (req,res)=>{
    Movie.deleteOne({_id: req.params.id}, (error) => {
        if(error) {
            console.log(error)
            
                 
        } else {
           console.log('Movie deleted');
            res.send('movies/list') 
           
            
        }
    })
} 
 

module.exports = movieController;