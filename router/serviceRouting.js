const express = require("express");
const Service = require("../model/serviceModel");
const serviceRouting = express.Router();

serviceRouting.post("/service", async (req, res) => {
  try {
    const { sname, description } = req.body;
    const beforeCheck = await Service.findOne({ sname: sname });
    if (beforeCheck) {
      return res.send("Service Already Exists");
    } else {
      const serviceData = new Service(req.body);
      const result = await serviceData.save();
      if (result._id) {
        res.send("Record Inserted");
      } else {
        res.send("Unable to Insert Record");
      }
    }
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.get("/service", async (req, res) => {
  try {
    const result = await Service.find();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No Record Found");
    }
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.delete("/service/:sid", async (req, res) => {
  try {
    const result = await Service.deleteOne({ _id: req.params.sid });
    if (result.deletedCount > 0) {
      res.send("Service Deleted");
    } else {
      res.send("Unable to Delete Record");
    }
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.get("/service/:sid", async (req, res) => {
  try {
    const result = await Service.findOne({ _id: req.params.sid });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

serviceRouting.put("/service/:sid", async (req, res) => {
  try {
    const result = await Service.updateOne(
      { _id: req.params.sid },
      { $set: req.body }
    );
    if (result.modifiedCount > 0) {
      res.send("Service Updated");
    } else {
      res.send("Unable to Update Record");
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = serviceRouting;
