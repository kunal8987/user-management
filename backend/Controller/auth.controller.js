const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken"); // For JWT token generation
const { AuthModel } = require("../Models/auth.model");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // HASH AND SALT THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 7);

    // GENERATE AN OTP
    const otp = Math.floor(Math.random() * 100000);

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
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // Generate a JWT token (customize this part)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.status(200).send({ success: true, message: "Login Successful", token });
  } catch (error) {
    next(error);
  }
};

const conformEmail = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    console.log(email, otp);
    const user = await AuthModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    if (user.otp !== otp) {
      return res.status(401).send({ success: false, message: "Invalid OTP" });
    }

    // Mark the email as confirmed in the database
    user.emailConfirmed = true;

    // await user.save();

    // Clear the OTP after successful conformed request
    // user.otp = null;
    await user.save();
    res
      .status(200)
      .send({ success: true, message: "Email confirmed successfully" });
  } catch (error) {
    next(error);
    console.log(error.message);
  }
};

module.exports = { registerUser, login, conformEmail };
