const express = require('express');
const router = express.Router();
//const multer = require ('multer');

const cors = require('cors');

const movieController = require('../controllers/MoviesController.js');
const upload = require('../handlers/multer');

//get a list of movies
router.get('/movies/list', cors(), movieController.list);

//add a new movies to DB
router.post('/movies/new', upload.single('image'), cors(), movieController.save);

//show a movie
router.get('/movies/:id', cors(), movieController.show);

//update a movies in the DB

router.put('/movies/', cors(), movieController.update);

//delete a movie in the DB
router.delete('/movies/', cors(), movieController.delete);

module.exports = router;
