const mongoose = require("mongoose");

let employeeSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
});

let EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = {
  EmployeeModel,
};
