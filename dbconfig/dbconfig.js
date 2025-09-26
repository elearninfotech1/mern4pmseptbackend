const mongoose = require("mongoose");
const conUrl = "mongodb+srv://elearninfotech1_db_user:zScem0ipe5ePB1eF@mern4pmsept.kulzui0.mongodb.net/?retryWrites=true&w=majority&appName=MERN4pmSept";
mongoose
  .connect(conUrl)
  .then((con) => {
    //console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
