const express = require("express");
const {
  createProfiles,
  getUser,
  updateProfile,
} = require("../Controller/user.controller");

const { requireSignIn } = require("../Middleware/auth.middleware");
let userRouter = express.Router();

userRouter.post("/create-profile", requireSignIn, createProfiles);
userRouter.get("/get-profile", requireSignIn, getUser);
userRouter.patch("/update-profile/:id", requireSignIn, updateProfile);

module.exports = { userRouter };
