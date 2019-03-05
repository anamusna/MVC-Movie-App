const mongoose = require('mongoose');
const usersSchema = require('../models/Users');
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var config = require('../config');

const userController = {};

//List all users
userController.list = (req, res) => {
	User.find({}).exec((error, users) => {
		if (error) {
			console.log('Error:', error);
		} else {
			res.send(users);
		}
	});
};

userController.create = (req, res, next) => {
	//const hash = bcrypt.hash(req.body.password, 10)

	bcrypt.hash(req.body.password, 10, (err, hash) => {
		if (err) {
			return res.status(500).json({
				error : 'err'
			});
		} else {
			let user = new User({
				name     : req.body.name,
				email    : req.body.email,
				username : req.body.username,
				password : hash
			});

			user
				.save()
				.then((result) => {
					console.log(result);

					res.status(201).json({
						message : 'User created'
					});
				})
				.catch((err) => {
					console.log(err);
					res.status(500).json({
						error : err
					});
				});
		}
	});
};

//login method

userController.check = (req, res) => {
	User.find({
		username : req.body.username
	})
		.exec()
		.then((user) => {
			if (user.length < 1) {
				return res.status(401).json({
					message : 'please enter your correct username'
				});
			}
			bcrypt.compare(req.body.password, user[0].password, (err, result) => {
				// res == true
				if (err) {
					return res.status(404).json({
						message : 'Please enter the correct Password'
					});
				}
				if (result) {
					const token = jwt.sign(
						{
							username : user[0].username,
							userId   : user[0]._id
						},
						config.secret,
						{
							expiresIn : '1h'
						}
					);
					return res.status(200).json({
						message : 'signin successful',

						token   : token
					});
				}
				res.status(401).json({
					message : 'Please enter the right Username  and Password'
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error : err
			});
		});
};

//show method
userController.show = (req, res) => {
	User.findOne({
		_id : req.params.id
	}).exec((error, user) => {
		if (error) {
			console.log('Error:', error);
		} else {
			res.send(user);
		}
	});
};

//update
userController.update = (req, res) => {
	User.findByIdAndUpdate(
		req.params.id,
		{
			$set : {
				name       : req.body.username,
				email      : req.body.email,
				username   : req.body.username,
				password   : req.body.password,
				updated_at : req.body.updated_at
			}
		},
		{
			new : true
		},
		(error, user) => {
			if (error) {
				console.log(error);
				res.status(400);
				res.send({
					error : 'None shall pass'
				});
			} else {
				res.send(user);
			}
		}
	);
};

//delete
userController.delete = (req, res, next) => {
	User.deleteOne(
		{
			_id : req.params.id
		},
		(error) => {
			if (error) {
				console.log(error);
				res.status(500).json({
					error : err
				});
			} else {
				console.log('User deleted');
				res.status(200).json({
					message : 'User deleted'
				});
			}
		}
	);
};

module.exports = userController;
