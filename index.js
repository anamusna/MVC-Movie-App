const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const movies = require('./routes/movies')

mongoose
  .connect(`mongodb://localhost:27017/movies`, { useNewUrlParser: true })
  .then(console.log('Successful connection to database'))
  .catch(error => {
    console.log(`The following error occurred: ${error.message}`)
  })

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/movies', movies)

  app.set('views', path.join(__dirname, './views'))
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.listen(4000, () => {
    console.log('Listening at port 4000')
  })