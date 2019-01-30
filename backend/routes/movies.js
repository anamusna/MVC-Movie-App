const express = require ('express')
const router = express.Router()

const movie = require('../controllers/MoviesController.js')

//get all movies
router.get('/', movie.list)
//create movies
router.get('/create', movie.create)
router.post('/save', movie.save)
//get single movie by id 
router.get('/show/:id', movie.show)
//Edit Restaurant
router.get('/edit/:id', movie.edit)
//Update
router.post('/update/:id', movie.update)
//delete

router.post('delete/:id', movie.delete)



module.exports = router