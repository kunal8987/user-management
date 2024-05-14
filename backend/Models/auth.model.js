const mongoose = require("mongoose");

//THIS IS THE AUTH SCHEMA FOR REGISTRATION AND LOGIN
const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    emailConfirmed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = { Auth };
