const mongoose = require("mongoose");

let doctorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Image: { type: String, required: true },
  Specialization: { type: String, required: true },
  Experience: { type: Number, required: true },
  Location: { type: String, required: true },
  Slots: { type: Number, required: true },
  Fees: { type: Number, required: true },
  Date: { type: String, required: true },
});

let DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = {
  DoctorModel,
};
