const express = require('express');
const router = express.Router();
const multer = require ('multer');

const cors = require('cors');

const movieController = require('../controllers/MoviesController.js');

 const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads/');
    },
    filename: (req, file, cb)=>{
        cb(null, new Date().toISOString() + file.originalname);
    }
});

 const fileFilter = (req, file, cb)=>{
    //reject file
    if (file.mimetype ===  file.mimetype === 'image/jpg' || file.mimetype === 'image/png' ) {
        cb(null, true)   
    } else{
        cb(null, false)
    }
    
    
}  
//const upload = multer({dest:'uploads/'})

 const upload = multer({storage: storage, 
    limits:{
            fileSize: 1024 * 1024 *5
        },
       /*  fileFilter: fileFilter */

}); 
//get a list of movies
router.get('/movies/list', cors(), movieController.list);

//add a new movies to DB
router.post('/movies/new', upload.single('image'), cors(), movieController.save);

//show a movie
router.get('/movies/:id', cors(), movieController.show);

//update a movies in the DB

router.put('/movies/:id', cors(), movieController.update);

//delete a movie in the DB
router.delete('/movies/:id', cors(), movieController.delete);

module.exports = router;
