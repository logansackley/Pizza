//Frameworks
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

//Set up Mongo DB conneciton
const mongoDB = "mongodb+srv://LoganSackley10:Pizzatime@cluster0.fpgjf.mongodb.net/pizza?retryWrites=true&w=majority"


mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

// Setup express app
const app = express()
const port = 3001

// Add middleware
// This tells express to parse any request body like POST or PUT so we can use it
app.use(express.json())


// This tells express to let us access our api from on the same origin (localhost)
app.use(cors())

// Bring in the routes
const routes = require('./routes.js')

// Tell express to use the routes we just brough in
// Mount those routes onto the /api endpoint.
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Pizza time is listening on ${port}`)
})