const express = require("express");
const router = express.Router();

const {
  addMaintenancePlan,
  getAllPlans,
} = require("../../controllers/Mechanical/mechanicalMaintenance.controller");

//http://localhost:3001/api/Customer/add
//if call above url with post method addCustomer method will be called
router.post("/add", addMaintenancePlan);
router.get("/all", getAllPlans);

module.exports = router;
