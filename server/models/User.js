const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requiured: [true, "Must provide a name"],
  },
  email: {
    type: String,
    requiured: [true, "Must provide a name"],
  },
  password: {
    type: String,
    requiured: [true, "Must provide a name"],
  },
});

module.exports = mongoose.model("User", userSchema);
