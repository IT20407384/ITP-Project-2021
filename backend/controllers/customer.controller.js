//implement bussiness logic here
//CRUD functionalities

//import student model
const Customer = require('../models/customer.model');

//add customer
const addCustomer = (req, res) => {

    // const cusName = req.body.name;
    // const pnum = Number(req.body.phoneNumber);
    // const age = Number(req.body.age);
    // const vehicle = req.body.vehicle;

    //like this we can give one by one

    //or else in one line:
    const {cusName, pnum, age, vehicle} = req.body;

    //create a object
    const newCustomer = new Customer({
        cusName,
        pnum,
        age,
        vehicle
    });

    newCustomer.save().then((Customer) => {
        res.json(Customer);
    }).catch((err)=>{
        res.json(err);
    });

}


const getAllCustomers = (req, res)=> {
    
    //get all customers is by find() method.
    //read mongoose queries
    Customer.find().then((Customer)=>{
        res.json(Customer);
    }).catch((err)=>{
        res.json(err);
    })
}

module.exports = {
    addCustomer,
    getAllCustomers,
}