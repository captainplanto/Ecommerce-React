//import mongoose, { Schema } from "mongoose";
///export {};
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 17,
    required: true,
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 2020,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
 module.exports.User = User;
