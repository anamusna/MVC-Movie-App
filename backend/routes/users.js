const express = require('express');
const router = express.Router();
const cors = require('cors');
const userController = require('../controllers/UsersController.js');

//get a list of users
router.get('/users/list', cors(), userController.list);

//add a new users to DB
router.post('/users/signup', cors(), userController.create);

//signin
router.post('/users/signin', cors(), userController.check);

//show a user
router.get('/users/:id', cors(), userController.show);

//update a users in the DB

router.put('/users/:id', cors(), userController.update);

//delete a user in the DB
router.delete('/users/:id', cors(), userController.delete);

module.exports = router;
