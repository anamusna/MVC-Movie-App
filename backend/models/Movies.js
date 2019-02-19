const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title       : {
		type     : String,
		required : [ true, 'Title field is required' ],
		unique   : true,
		trim     : true
	},
	director    : {
		type : String
	},
	genre       : {
		type     : String,
		required : [ true, 'Genre field is required' ]
	},
	description : {
		type : String,
		trim : true
	},
	rating      : {
		type : Number
	},
	image       : {
		type : Object
	},
	updated_at  : {
		type    : Date,
		default : Date.now
	}
});

module.exports = movieSchema;
