const mongoose = require('mongoose')
const movieSchema = require('../models/Movies')

 const Movie = mongoose.model('Movie', movieSchema)

const movieController = {}



//List all movies
movieController.list = (req,res) => {
    Movie.find({}).exec((error, movie) => {
        if(error){
            console.log('Error:', error)
        } else {
            res.send(movie)
        }
    })
}

// create method
movieController.save = (req, res)=>{

     let movie = new Movie({
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        description: req.body.description,
        rating: req.body.rating
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
            res.redirect('/movies/', {movie:req.body})
                 
        } else{
           res.redirect(`/movies/${movie._id}`)
            
        }
    })
    } 
 
/* movieController.save = (req, res) => {
    let movie = new Movie({
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        description: req.body.description,
        rating: req.body.rating,
        updated_at: req.body.updated_at

    })
    movie.save((error) => {
        if (error) {
            console.log(error)
            res.render('movies/create')
        } else {
            console.log('Movie was created');
            res.redirect(`/movies/show/{movie._id}`)

        }
    })
} */
// movieController.create = (req, res)=>{
//     res.render('../views/movies/create')
// }

 

//show
/* movieController.show = (req, res) => {
    Movie.findOne({_id: req.params.id}).exec((error,movie)=>{
        if(error) {
            console.log('Error:',error)
                 
        } else{
           res.render('../views/movies/show', {movie: movie})
            
        }
    })
} */

//edit
/* movieController.edit = (req, res)=>{
    Movie.findOne({_id: req.params.id}).exec((error,movie)=>{
        if(error) {
            console.log('Error:',error)
                 
        } else{
           res.render('../views/movies/edit', {movie: movie})
            
        }
    })
} */
//update
/* movieController.update = (req, res)=>{
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
            res.redirect('../views/movies/edit', {movie:req.body})
                 
        } else{
           res.redirect(`/movies/show/${movie._id}`)
            
        }
    })
    } */
//delete
/* movieController.delete = (req,res)=>{
    Movie.remove({_id: req.params.id}, (error) => {
        if(error) {
            console.log(error)
            
                 
        } else{
           console.log('Movie deleted');
           
            
        }
    })
} */

module.exports = movieController;