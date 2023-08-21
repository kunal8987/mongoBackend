const express = require("express");
const { DoctorModel } = require("../model/doctor.model");
doctorRoutes = express.Router();

//get

doctorRoutes.get("/appointment", async (req, res) => {
  let query = req.query;
  let params = req.params;
  try {
    if (query.Specialization) {
      let data = await DoctorModel.find({
        Specialization: query.Specialization,
      });
      res.send(data);
    }
    const data = await DoctorModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

//create
doctorRoutes.post("/create", async (req, res) => {
  try {
    const data = new DoctorModel(req.body);
    await data.save();
    res.send({ msg: "Data added successful" });
  } catch (error) {
    res.send(error);
  }
});

// update

doctorRoutes.patch("/updateAppointment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await DoctorModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send(`Doctor ${id} data updated successfull`);
  } catch (error) {
    res.send(error);
  }
});

// delete

doctorRoutes.delete("/deleteAppointment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await DoctorModel.findByIdAndDelete({ _id: id });
    res.send(`Doctor ${id} data deleted successfull`);
  } catch (error) {
    res.send(error);
  }
});

module.exports = {
  doctorRoutes,
};
