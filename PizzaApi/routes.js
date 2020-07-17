//Express
const express = require('express')

//router
const router = express.Router()
 
//Models
const Order = require('./models/Order')

//Routes

//GetOrders returns all orders
router.get('/orders', async function(req, res, next){
   //Search database for any record of orders in our database
   //looks into our database, blank searches everything
   const allOrders = await Order.find({})
   //Send back orders in the form of JSON
   res.json(allOrders)
  })

//Specific Info Order
router.get('/orders/:id', async function(req, res, next){
    //get order id from URL
    const orderID = req.params.id
    //look in database for id
    const oneOrder = await Order.findOne({_id: orderID})
    //Send back orders in the form of JSON
    res.json(oneOrder)
   })

//Create a new order (POST)
router.post('/orders', function(req,res,next){
    //new order object
    const newOrder = new Order()
    newOrder.customer = req.body.customer
    newOrder.size = req.body.size
    newOrder.toppings = req.body.toppings
    //Order sent to the kitchen
    newOrder.status = 'pending'
    //calculate price on server later on
    newOrder.price = req.body.price
    //Sends new object to MongoDB
    newOrder.save()
    //Http 200 means it's all good
    res.sendStatus(200)
})

//Update an order
router.put('/orders/:id', async function(req, res, next){
        const orderID = req.params.id
        //find object in database and then change it with what's in our request
        await Order.updateOne({_id:orderID}, req.body)
        //good to go
        res.sendStatus(200)
})
 

//Test File
router.get('/test', function(req, res, next){
  res.send('hello')  
})


module.exports = router