//Require Mongoose
const mongoose = require('mongoose')

//schema
//What our order records will look like

const OrderSchema= new mongoose.Schema({
    customer: String,
    size: Number,
    toppings: Array,
    status: String,
    price: Number,
    orderTimestamp:{
        type: Date,
        //automatically sets it up for now
        default: Date.now
    }
})


//compile model from schema
const Order = mongoose.model('Order', OrderSchema)

//Export the model from the file so it can be accessed in other files
module.exports = Order