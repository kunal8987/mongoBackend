const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  //   console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.KEY);
      //   console.log(decoded);
      req.body.userID = decoded.userID;
      // req.body.email = decoded.email;

      //   console.log(decoded);
      next();
    } catch (error) {
      res.status(400).send({ msg: "Unauthorized" });
    }
  } else {
    res.status(400).send({ msg: "Unauthorized" });
  }
};

module.exports = {
  authenticate,
};
