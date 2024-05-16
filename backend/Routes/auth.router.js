const express = require("express");
const {
  registerUser,
  login,
  conformEmail,
  forgetPasswords,
  updatePassword,
} = require("../Controller/auth.controller");

let authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", login);
authRouter.post("/email-conformed", conformEmail);
authRouter.post("/forget-password", forgetPasswords);
authRouter.post("/update-password", updatePassword);

module.exports = { authRouter };
