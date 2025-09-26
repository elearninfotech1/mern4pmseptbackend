const express = require("express");
const cors = require("cors");
const studentRouting = require("./routingmysql/studentRouting");

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());

app.use("/", studentRouting);

app.listen(port, () => {
  console.log(`Server is Started on port number ${port}`);
});
