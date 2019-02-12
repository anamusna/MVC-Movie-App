const express = require ('express');
const router = express.Router();
const cors=require('cors');
const movieController = require('../controllers/MoviesController.js');

//get a list of movies
router.get('/movies/list', cors(), movieController.list);


//add a new movies to DB
router.post('/movies/list', cors(), movieController.save);
 
//show a movie
router.get('/movies/show/:id', cors(), movieController.show);
  
//update a movies in the DB

router.put('/movies/update/:id', cors(), movieController.update);

//delete a movie in the DB
router.delete('/movie/delete/:id', cors(), movieController.delete);


module.exports = router

