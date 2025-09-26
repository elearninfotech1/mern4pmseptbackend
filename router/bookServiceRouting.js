const express = require("express");
const BookService = require("../model/bookserviceModel");
const bookServiceRouting = express.Router();

bookServiceRouting.post("/bookservice", async (req, res) => {
  try {
    const serviceProviderData = new BookService(req.body);
    const result = await serviceProviderData.save();
    if (result._id) {
      res.send("Book Service Inserted");
    } else {
      res.send("Unable to Insert Record");
    }
  } catch (err) {
    res.send(err);
  }
});

bookServiceRouting.get("/bookservice", async (req, res) => {
  try {
    const result = await BookService.find();
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("No Record Found");
    }
  } catch (err) {
    res.send(err);
  }
});

bookServiceRouting.delete("/bookservice/:sid", async (req, res) => {
  try {
    const result = await BookService.deleteOne({ _id: req.params.sid });
    if (result.deletedCount > 0) {
      res.send("Service Deleted");
    } else {
      res.send("Unable to Delete Record");
    }
  } catch (err) {
    res.send(err);
  }
});

bookServiceRouting.put("/bookservice/:sid", async (req, res) => {
  try {
    const result = await BookService.updateOne(
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

module.exports = bookServiceRouting;
