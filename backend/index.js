const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
//const path =require('path');
const cors = require('cors');
const morgan = require('morgan');

//set up express app
const app = express();
app.get('/', (req, res) => {
	res.send('hi from server');
});

app.use(morgan('combined'));

//cookies
app.use(cookieParser());

app.get('/', (req, res) => {
	res.cookie('session_id', '12888u934kjn445pe7rgj', {
		expires : new Date(Date.now() + 800000)
	});
});

//connect to mongodb
mongoose
	.connect(`mongodb://localhost:27017/movies`, { useNewUrlParser: true })
	.then(console.log('Successful connection to database'))
	.catch((error) => {
		console.log(`The following error occurred: ${error.message}`);
	});
//images
app.use('/uploads', express.static('./uploads/'));

//error handling middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/users'));

//listen for request

app.listen(process.env.PORT || 3001, () => {
	console.log('Listening at port 3001');
});
