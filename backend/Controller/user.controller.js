const {UserModel} = require('../Models/user.model')

//CREATE PROFILE FUNCTION
const createProfiles = async (req, res, next) => {
  try {
    let user = new UserModel(req.body);
    // console.log(user);
    await user.save();

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
    let profile = await UserModel.find({ authId: req.body.authId });
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
    let { id } = req.params;

    //FINDING THE PROFILE BY PID
    let profile = await UserModel.findOne({ _id: id });

    //AUTHENTICATE THE USER FOR UPDATE
    if (req.body.authId !== profile.authId) {
      res.status(404).send({
        success: false,
        message: "You Are Not A Authorize Person To Do This Action",
      });
    } else {
      //UPDATE THE PROFILE
      await UserModel.findByIdAndUpdate({ _id: id }, req.body);
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
