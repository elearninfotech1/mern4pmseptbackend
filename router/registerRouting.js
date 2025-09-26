const express = require("express");
const Register = require("../model/registerModel");
const registerRouter = express.Router();

registerRouter.post("/register", async (req, res) => {
  try {
    const registerData = new Register(req.body);
    const result = await registerData.save();
    if (result) {
      res.send({ status: "success", message: "Registered Successfully" });
    } else {
      res.send({ status: "failed", message: "Registration Failed" });
    }
  } catch (err) {
    res.send(err);
  }
});

registerRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await Register.findOne({ email: email });
    if (!exists) {
      res.send({ status: "failed", message: "User not found" });
    } else if (exists.password !== password) {
      res.send({ status: "failed", message: "Incorrect password" });
    } else {
      res.send({ status: "success", message: exists });
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = registerRouter;
