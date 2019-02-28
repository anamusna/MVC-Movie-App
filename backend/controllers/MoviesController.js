const mongoose = require('mongoose');
const movieSchema = require('../models/Movies');
const SessionSchema = require('../models/SessionSchema');
const Session = mongoose.model('Session', SessionSchema);
const uuid = require('uuid');

const Movie = mongoose.model('Movie', movieSchema);

const movieController = {};

//List all movies
movieController.list = (req, res) => {
	Movie.find({}).exec((error, movies) => {
		if (error) {
			console.log('Error:', error);
		} else {
			res.send(movies);
		}
	});
};

// create method

movieController.login = (req, res) => {
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

			res.redirect('/home');
		} else {
			res.redirect('/login');
		}
	});
};

movieController.save = (req, res) => {
	console.log(req.body);

	let movie = new Movie({
		title       : req.body.title,
		director    : req.body.director,
		genre       : req.body.genre,
		description : req.body.description,
		rating      : req.body.rating,
		image       : req.file.path
	});

	movie.save((error) => {
		if (error) {
			console.log(error);
			res.send(error);
		} else {
			console.log('Movie was created');
			res.send(movie);
		}
	});
};

//show method
movieController.show = (req, res) => {
	Movie.findOne({ _id: req.params.id }).exec((error, movie) => {
		if (error) {
			console.log('Error:', error);
		} else {
			res.send(movie);
		}
	});
};

//update
movieController.update = (req, res) => {
	console.log('testing console', req.query.id, req.params, req.body);
	Movie.findByIdAndUpdate(
		{ _id: req.query.id },
		{
			$set : {
				title       : req.body.title,
				director    : req.body.director,
				genre       : req.body.genre,
				description : req.body.description,
				rating      : req.body.rating,
				updated_at  : req.body.updated_at
			}
		},
		{ new: true },
		(error, movie) => {
			if (error) {
				console.log(error);
				res.status(400);
				res.send({ error: 'None shall pass' });
			} else {
				res.send(movie);
			}
		}
	);
};

//delete
movieController.delete = (req, res) => {
	console.log('testing console', req.query.id, req.params, req.body);
	Movie.deleteOne({ _id: req.query.id }, (error) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Movie deleted');
			res.send('movies/list');
		}
	});
};

module.exports = movieController;
