const express = require("express");
const {
  registerUser,
  login,
  conformEmail,
} = require("../Controller/auth.controller");

let authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", login);
authRouter.post("/email_conformed", conformEmail);

module.exports = { authRouter };
