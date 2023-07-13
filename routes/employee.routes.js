const express = require("express");
const { EmployeeModel } = require("../model/employee.model");
employeeRoutes = express.Router();

//create
employeeRoutes.post("/addEmployee", async (req, res) => {
  try {
    const data = new EmployeeModel(req.body);
    await data.save();
    res.send({ msg: "Employee added successful" });
  } catch (error) {
    res.send(error);
  }
});

// update

employeeRoutes.patch("/updateEmployee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await EmployeeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send(`Employee ${id} data updated successfull`);
  } catch (error) {
    res.send(error);
  }
});

// delete

employeeRoutes.delete("/deleteEmployee/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await EmployeeModel.findByIdAndDelete({ _id: id });
    res.send(`Employee ${id} data deleted successfull`);
  } catch (error) {
    res.send(error);
  }
});

//get

employeeRoutes.get("/employee", async (req, res) => {
  try {
    const data = await EmployeeModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  employeeRoutes,
};
