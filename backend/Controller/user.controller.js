const UserModel = require("../Models/user.model");

//CREATE PROFILE FUNCTION
const createProfiles = async (req, res, next) => {
  try {
    let newUser = new UserModel(req.body);

    await newUser.save();

    res.status(200).send({
      success: true,
      message: "User Profile Created Successfully",
    });
  } catch (error) {
    next(error);
    console.log("Error Form Create Profile Controller");
  }
};

//GET USER PROFILE FUNCTION
const getUser = async (req, res, next) => {
  try {
    //FIND THE USER PROFILE
    let profile = await UserModel.find({ authId: req.user._id });
    res.status(200).send({
      success: true,
      message: "User Profile Found Successfully",
      profile,
    });
  } catch (error) {
    next(error);
    console.log("Error Form Get User Controller");
  }
};

//UPDATE PROFILE FUNCTION
const updateProfile = async (req, res, next) => {
  try {
    //GETTING THE PROFILE ID THROUGH REQ PARAMS
    let { pId } = req.params;

    //FINDING THE PROFILE BY PID
    let profile = await UserModel.findOne({ _id: pId });

    //AUTHENTICATE THE USER FOR UPDATE
    if (req.user._id !== profile.authId) {
      res.status(404).send({
        success: false,
        message: "You Are Not A Authorize Person To Do This Action",
      });
    } else {
      //UPDATE THE PROFILE
      await UserModel.findByIdAndUpdate({ _id: pId }, req.body);
      res.status(200).send({
        success: true,
        message: "Profile Updated Successfully",
      });
    }
  } catch (error) {
    next(error);
    console.log("Error Form Update Profile Controller");
  }
};

module.exports = { createProfiles, getUser, updateProfile };