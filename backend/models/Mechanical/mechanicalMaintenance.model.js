const mongoose = require("mongoose");

//now create the schema
const { Schema } = mongoose;

const maintenancePlanSchema = new Schema({
  planID: String,
  planName: String,
  spareParts: { type: Array, default: [] },
  planDescription: String,
  amount: String,
  discount: String,
  total: String,
});

//convert schema into a model
//1st para = collection name, 2nd = schema
const Mechanical = mongoose.model("maintenancePlan", maintenancePlanSchema);

//export our module to controller
module.exports = Mechanical;
