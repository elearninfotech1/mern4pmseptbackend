const express = require("express");
const Connection = require("../dbconfig/dbconnect");
const studentRouting = express.Router();

studentRouting.get("/student", (req, res) => {
  try {
    Connection.query("SELECT * FROM student", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    res.send("Server Error");
  }
});

studentRouting.post("/student", (req, res) => {
  try {
    const { id, name, address } = req.body;
    Connection.query(
      `insert into student (id,name,address) values ("${id}","${name}","${address}")`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (err) {
    res.send("Server Error");
  }
});

studentRouting.delete("/student/:sid", (req, res) => {
  try {
    const sid = req.params.sid;
    Connection.query(`delete from student where id="${sid}"`, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    res.send("Server Error");
  }
});

studentRouting.get("/student/:sid", (req, res) => {
  try {
    const sid = req.params.sid;
    Connection.query(
      `select * from student where id="${sid}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (err) {
    res.send("Server Error");
  }
});

studentRouting.put("/student/:sid", (req, res) => {
  try {
    const sid = req.params.sid;
    const { id, name, address } = req.body;
    Connection.query(
      `update student set name="${name}",address="${address}" where id="${sid}"`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (err) {
    res.send("Server Error");
  }
});

module.exports = studentRouting;
