const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken"); // For JWT token generation
const { AuthModel } = require("../Models/auth.model");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// REGISTERED THE NEW USER WITH OTP

const registerUser = async (req, res, next) => {
  try {
    //GETTING FORM REQUEST BODY
    const { username, email, password } = req.body;

    //FINDING THE EXISTING USER
    const user = await AuthModel.findOne({ email });

    if (user) {
      return res
        .status(200)
        .send({ success: true, message: "User Already Exist" });
    }

    // HASH AND SALT THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 7);

    // GENERATE AN OTP
    const otp = Math.floor(100000 + Math.random() * 999999);

    // SAVE AUTH DETAILS (INCLUDING OTP) TO THE DATABASE
    const newUser = new AuthModel({
      username,
      email,
      password: hashedPassword,
      otp,
    });

    await newUser.save();

    // SEND OTP TO USER'S EMAIL (USING NODEMAILER EMAIL SERVICE)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    //CREATING MAIL OPTION FOR MAIL
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "OTP for Login",
      text: `Your OTP for Login And Email Conformation : ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      success: true,
      message: "User Registered Successfully. Check Your Email For OTP.",
    });
  } catch (error) {
    next(error);
    console.log("Error Form Registered Controller");
  }
};

// LOGIN THE USER WITH EMAIL AND PASSWORD
const login = async (req, res, next) => {
  try {
    //GETTING THE DATA FROM REQUEST BODY
    const { email, password } = req.body;

    //FINDING THE EXISTING USER
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    //COMPARING THE PASSWORD
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // GENERATE A JWT TOKEN (CUSTOMIZE THIS PART)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.status(200).send({ success: true, message: "Login Successful", token });
  } catch (error) {
    next(error);
    console.log("Error Form The Login Controller");
  }
};

//EMAIL CONFORMATION WITH EMAIL AND OTP
const conformEmail = async (req, res, next) => {
  try {
    //GETTING THE DATA FROM REQUEST BODY
    const { email, otp } = req.body;

    //FINDING THE EXISTING USER
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    //CHECKING IF EMAIL ALREADY CONFORMED
    if (user.emailConfirmed === true) {
      res
        .status(201)
        .send({ success: true, message: "Email Already Confirmed " });
    }

    //IF OTP NOT MATCH
    if (user.otp !== otp) {
      return res.status(401).send({ success: false, message: "Invalid OTP" });
    }

    // MARK THE EMAIL AS CONFIRMED IN THE DATABASE
    user.emailConfirmed = true;

    await user.save();

    res
      .status(200)
      .send({ success: true, message: "Email confirmed successfully" });
  } catch (error) {
    next(error);
    console.log("Error Form Conform Email Controller");
  }
};

//FORGET PASSWORD CONTROLLER
const forgetPasswords = async (req, res, next) => {
  try {
    //GETTING THE DATA FROM REQUEST BODY
    const { email } = req.body;

    //FINDING THE EXISTING USER
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    // GENERATE AN OTP
    const resendOtp = Math.floor(100000 + Math.random() * 999999);

    //UPDATE THE OTP
    user.otp = resendOtp;

    await user.save();

    // SEND OTP TO USER'S EMAIL (USING NODEMAILER EMAIL SERVICE)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    //CREATING MAIL OPTION FOR MAIL
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "OTP for Change Password",
      text: `Your OTP for Change Password : ${resendOtp}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      success: true,
      message: "Check Your Email For OTP.",
    });
  } catch (error) {
    next(error);
    console.log("Error From Forget Password Controller");
  }
};

//UPDATE PASSWORD CONTROLLER
const updatePassword = async (req, res, next) => {
  try {
    //GETTING DATA FROM REQUEST BODY
    const { email, newPassword, otp } = req.body;

    //FINDING THE EXISTING USER
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    //CHECKING THE OTP
    if (user.otp !== otp) {
      return res.status(401).send({ success: false, message: "Invalid OTP" });
    }

    // HASH AND SALT THE PASSWORD
    const hashedPassword = await bcrypt.hash(newPassword, 7);

    //UPDATE THE PASSWORD
    user.password = hashedPassword;

    await user.save();

    return res
      .status(200)
      .send({ success: true, message: "Password Update Successfully" });
  } catch (error) {
    next(error);
    console.log("Error Form The Update Password Controller");
  }
};

module.exports = {
  registerUser,
  login,
  conformEmail,
  forgetPasswords,
  updatePassword,
};
