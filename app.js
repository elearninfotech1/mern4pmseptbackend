const express = require("express");
const studentRouting = require("./router/studentRouting");
const empRouting = require("./router/empRouting");
require("./dbconfig/dbconfig");
const cors = require("cors");
const registerRouter = require("./router/registerRouting");
const serviceRouting = require("./router/serviceRouting");
const subServiceRouting = require("./router/subServiceRouting");
const serviceProviderRouting = require("./router/serviceProviderRouting");
const bookServiceRouting = require("./router/bookServiceRouting");
const contactusRouting = require("./router/contactusRouting");

const app = express();
const port = 4000;
app.use(cors());

app.use(express.json());

app.use("/", studentRouting);
app.use("/", empRouting);
app.use("/", registerRouter);
app.use("/", serviceRouting);
app.use("/", subServiceRouting);
app.use("/", serviceProviderRouting);
app.use("/", bookServiceRouting);
app.use("/", contactusRouting);

app.listen(port, () => {
  console.log(`Server is Started on port number ${port}`);
});
