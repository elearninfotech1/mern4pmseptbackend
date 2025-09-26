const express = require("express");
const Employee = require("../model/empModel");
const empRouting = express.Router();

empRouting.post("/employee", async (req, res) => {
  try {
    const empData = new Employee(req.body);
    const result = await empData.save();
    if (result._id) {
      res.send("Record Inserted");
    } else {
      res.send("Unable to Insert Record");
    }
  } catch (err) {
    res.send(err);
  }
});

empRouting.get("/employee", async (req, res) => {
  try {
    const result = await Employee.find();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No Record Found");
    }
  } catch (err) {
    res.send(err);
  }
});

empRouting.delete("/employee/:eid", async (req, res) => {
  try {
    const eid = req.params.eid;
    const result = await Employee.deleteOne({ _id: eid });
    if (result.deletedCount > 0) {
      res.send("Record Deleted");
    } else {
      res.send("Unable to Delete Record");
    }
  } catch (err) {
    res.send(err);
  }
});

empRouting.put("/employee/:eid", async (req, res) => {
  try {
    const eid = req.params.eid;
    const result = await Employee.updateOne({ _id: eid }, { $set: req.body });
    if (result.modifiedCount > 0) {
      res.send("Record Updated");
    } else {
      res.send("Unable to Update Record");
    }
  } catch (err) {
    res.send(err);
  }
});

empRouting.get("/employee/:eid", async (req, res) => {
  try {
    const eid = req.params.eid;
    const result = await Employee.findOne({ _id: eid });
    if (result) {
      res.send(result);
    } else {
      res.send("No Record Found");
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = empRouting;
