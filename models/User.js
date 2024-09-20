const mongoose = require("mongoose");

// Create User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

// Create and export User model
const User = mongoose.model("User", userSchema);
module.exports = User;
