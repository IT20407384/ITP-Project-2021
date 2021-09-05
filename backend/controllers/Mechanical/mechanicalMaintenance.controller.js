//implement bussiness logic here
//CRUD functionalities

//import mechanical maintenance model
const maintenancePlan = require("../../models/Mechanical/mechanicalMaintenance.model");

//add maintenance plan
const addMaintenancePlan = (req, res) => {
  // pass the data in one line
  const {
    planID,
    planName,
    spareParts,
    planDescription,
    amount,
    discount,
    total,
  } = req.body;

  //create a object

  const plan = new maintenancePlan({
    planID,
    planName,
    spareParts,
    planDescription,
    amount,
    discount,
    total,
  });

  plan
    .save()
    .then(plan => {
      res.json(plan);
    })
    .catch(err => {
      res.json(err);
    });
};

const getAllPlans = (req, res) => {
  //get all customers is by find() method.
  //read mongoose queries
  maintenancePlan
    .find()
    .then(maintenancePlan => {
      res.json(maintenancePlan);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports = {
  addMaintenancePlan,
  getAllPlans,
};
