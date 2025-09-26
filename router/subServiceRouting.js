const express = require("express");
const SubService = require("../model/subServiceModel");
const subServiceRouting = express.Router();

subServiceRouting.post("/subservice", async (req, res) => {
  try {
    const subserviceData = new SubService(req.body);
    const result = await subserviceData.save();
    if (result._id) {
      res.send("Sub Service Inserted");
    } else {
      res.send("Unable to Insert Record");
    }
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.get("/subservice", async (req, res) => {
  try {
    const result = await SubService.find();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No Record Found");
    }
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.delete("/subservice/:sid", async (req, res) => {
  try {
    const result = await SubService.deleteOne({ _id: req.params.sid });
    if (result.deletedCount > 0) {
      res.send("Service Deleted");
    } else {
      res.send("Unable to Delete Record");
    }
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.get("/subservice/:sid", async (req, res) => {
  try {
    const result = await SubService.findOne({ _id: req.params.sid });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.get("/subservicename/:sname", async (req, res) => {
  try {
    const result = await SubService.find({ sname: req.params.sname });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

subServiceRouting.put("/subservice/:sid", async (req, res) => {
  try {
    const result = await SubService.updateOne(
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

module.exports = subServiceRouting;
