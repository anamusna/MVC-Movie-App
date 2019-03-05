//routes

//User

const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);
router.get('/users', mainController.users);
router.get('/friends', mainController.friends);

module.exports = router;

//auth

const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController.js');

router.get('/login', authController.showLoginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

module.exports = router;

//controller

//Auth
const mongoose = require('mongoose');
const UserSchema = require('../models/UserSchema');
const User = mongoose.model('User', UserSchema);
const SessionSchema = require('../models/SessionSchema');
const Session = mongoose.model('Session', SessionSchema);
const uuid = require('uuid');

const authController = {};

authController.showLoginForm = (req, res) => {
	res.send(`
        <form method="POST">
            <input name="email"><br>
            <input name="password" type="password"><br>
            <button type="submit">Login</button>
        </form>
    `);
};

authController.login = (req, res) => {
	let email = req.body.email;
	let password = req.body.password;

	User.findOne({ email, password }).then((user) => {
		if (user) {
			let sessionId = uuid();

			res.cookie('session_id', sessionId, {
				expires : new Date(Date.now() + 900000)
			});

			let session = new Session({
				uuid    : sessionId,
				user_id : user
			});

			session.save();

			res.redirect('/friends');
		} else {
			res.redirect('/login');
		}
	});
};

authController.logout = (req, res) => {
	if (req.cookies && req.cookies.session_id) {
		res.clearCookie('session_id');
	}

	res.redirect('/login');
};

module.exports = authController;
