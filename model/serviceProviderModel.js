const mongoose = require("mongoose");
const serviceProviderSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("serviceproviders", serviceProviderSchema);
