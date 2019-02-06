const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path =require('path');
const cors=require('cors');
const morgan=require('morgan');



//set up express app
const app = express()

app.use(morgan('combined'))




//connect to mongodb
mongoose
  .connect(`mongodb://localhost:27017/movies`, { useNewUrlParser: true })
  .then(console.log('Successful connection to database'))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`)
  })

  //error handling middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  //routes
app.use('/api', require('./routes/api'));  
  //listen for request

  app.listen(3001, () => {
    console.log('Listening at port 3001')
  })