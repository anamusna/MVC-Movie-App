const express = require ('express');
const router = express.Router();
const cors=require('cors');
const movieController = require('../controllers/MoviesController.js');

//get a list of movies
router.get('/movies/list', cors(), movieController.list);


//add a new movies to DB
router.post('/movies/add', cors(), movieController.save);
 
  
//update a movies in the DB

router.put('/movies/update:id', cors(), movieController.update);


module.exports = router

