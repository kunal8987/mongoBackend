const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
userRouter = express.Router();
require("dotenv").config();
//user register create

userRouter.post("/register", async (req, res) => {
  const { password, email } = req.body;

  try {
    const exist = await UserModel.findOne({ email });
    if (exist) {
      res.status(400).send({ msg: "Email already exist!" });
    } else {
      bcrypt.hash(password, 5, (err, hash) => {
        const user = new UserModel({ email, password: hash });
        user.save();
        res.send("Registration successfull");
      });
    }
  } catch (error) {
    res.send(error);
  }
});

//user login read

userRouter.post("/login", async (req, res) => {
  const { password, email } = req.body;
  const user = await UserModel.findOne({ email });
  // console.log(user);
  if (user) {
    try {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user._id }, process.env.Key);
          res.send({ msg: "login successful", token: token });
        } else {
          res.status(400).send({ msg: "Incorrect password!" });
        }
      });
    } catch (error) {
      res.send(error);
    }
  } else {
    res.status(400).send({ msg: "User not found!" });
  }
});

module.exports = {
  userRouter,
};
