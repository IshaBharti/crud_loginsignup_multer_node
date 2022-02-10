const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("users", userSchema);
