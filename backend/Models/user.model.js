const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    required: true,
  },
  lastName: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  phone: {
    type: "Number",
    required: true,
  },
  address: {
    type: "String",
    required: true,
  },
  city: {
    type: "String",
    required: true,
  },
  zipCode: {
    type: "Number",
    required: true,
  },
  state: {
    type: "String",
    required: true,
  },
  country: {
    type: "String",
    required: true,
  },
  dob: {
    type: "String",
    required: true,
  },
  gender: {
    type: "String",
    required: true,
    enum: ["male", "female", "other"],
  },
  department: {
    type: "String",
    required: true,
  },
  aboutUs: {
    type: "String",
  },
  authId: {
    type: "String",
    required: true,
  },
  avatar: {
    type: "String",
    default: "https://cdn-icons-png.freepik.com/128/1077/1077114.png",
  },
});

let UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };
