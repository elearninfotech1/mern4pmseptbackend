const express = require("express");
const Student = require("../model/studentModel");
const studentRouting = express.Router();

studentRouting.post("/student", async (req, res) => {
  try {
    const studentdata = new Student(req.body);
    const result = await studentdata.save();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.get("/student", async (req, res) => {
  try {
    const result = await Student.find();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.delete("/student/:sid", async (req, res) => {
  try {
    const sid = req.params.sid;
    const result = await Student.deleteOne({ _id: sid });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.get("/student/:sid", async (req, res) => {
  try {
    const sid = req.params.sid;
    const result = await Student.findOne({ _id: sid });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

studentRouting.put("/student/:sid", async (req, res) => {
  try {
    const sid = req.params.sid;
    const result = await Student.updateOne({ _id: sid }, { $set: req.body });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = studentRouting;
