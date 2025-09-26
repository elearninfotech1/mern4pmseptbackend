const mongoose = require("mongoose");
const bookserviceSchema = new mongoose.Schema({
  sname: {
    type: String,
    required: true,
  },
  subsname: {
    type: String,
    required: true,
  },
  sprovider: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("bookservice", bookserviceSchema);
