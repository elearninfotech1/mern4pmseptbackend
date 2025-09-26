const express = require("express");
const ServiceProvider = require("../model/serviceProviderModel");
const serviceProviderRouting = express.Router();

serviceProviderRouting.post("/serviceprovider", async (req, res) => {
  try {
    const serviceProviderData = new ServiceProvider(req.body);
    const result = await serviceProviderData.save();
    if (result._id) {
      res.send("Service Provider Inserted");
    } else {
      res.send("Unable to Insert Record");
    }
  } catch (err) {
    res.send(err);
  }
});

serviceProviderRouting.get("/serviceprovider", async (req, res) => {
  try {
    const result = await ServiceProvider.find();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No Record Found");
    }
  } catch (err) {
    res.send(err);
  }
});

serviceProviderRouting.delete("/serviceprovider/:sid", async (req, res) => {
  try {
    const result = await ServiceProvider.deleteOne({ _id: req.params.sid });
    if (result.deletedCount > 0) {
      res.send("Service Deleted");
    } else {
      res.send("Unable to Delete Record");
    }
  } catch (err) {
    res.send(err);
  }
});

serviceProviderRouting.get(
  "/serviceprovider/:sname/:subsname",
  async (req, res) => {
    try {
      const result = await ServiceProvider.find({
        sname: req.params.sname,
        subsname: req.params.subsname,
      });
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send("No Record Found");
      }
    } catch (err) {
      res.send(err);
    }
  }
);

serviceProviderRouting.put("/serviceprovider/:sid", async (req, res) => {
  try {
    const result = await ServiceProvider.updateOne(
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

module.exports = serviceProviderRouting;
