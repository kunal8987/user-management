const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken"); // For JWT token generation
const Auth = require("../Models/auth.model");
const generateOtp = require("../Utility/otp");
const nodemailer = require("nodemailer");
const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // HASH AND SALT THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // GENERATE AN OTP
    const otp = generateOtp();

    // SAVE AUTH DETAILS (INCLUDING OTP) TO THE DATABASE
    const newUser = new Auth({
      username,
      email,
      password: hashedPassword,
      otp,
    });

    await newUser.save();

    // SEND OTP TO USER'S EMAIL (USING NODEMAILER EMAIL SERVICE)
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 888,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    //CREATING MAIL OPTION FOR MAIL
    const mailOptions = {
      from: "your@email.com",
      to: email,
      subject: "OTP for Login",
      text: `Your OTP for Login And Email Conformation : ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send({
      success: true,
      message: "User registered successfully. Check your email for OTP.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser };
