const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const customerSchema = new Schema({
    cusName : String,
    pnum : Number,
    age : Number,
    vehicle : String
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Customer = mongoose.model("Customer", customerSchema);

//export our module to controller
module.exports = Customer;