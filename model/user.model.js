const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  cPass: { type: String },
  email: { type: String },
  password: { type: String },
});

let UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
