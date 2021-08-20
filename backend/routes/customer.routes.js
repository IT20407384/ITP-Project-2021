const express = require('express');
const router = express.Router();

const {
    addCustomer,
    getAllCustomers
} = require('../controllers/customer.controller');


//http://localhost:3001/api/Customer/add
//if call above url with post method addCustomer method will be called
router.post("/add", addCustomer);
router.get("/all", getAllCustomers);

module.exports = router;