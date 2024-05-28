const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { AuthModel } = require("../Models/auth.model");

dotenv.config();

const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.body.authId = decode.authId;

    next();
  } catch (error) {
    console.log(error);
  }
};

//FOR ADMIN ONLY
// const isAdmin = async (req, res, next) => {
//   try {
//     const user = await AuthModel.findById(req.user._id);
//     if (user.role !== admin) {
//       return res.status(401).send({
//         success: false,
//         message: "UnAuthorized Access",
//       });
//     } else {
//       next();
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       success: false,
//       error,
//       message: "Error in admin middleware",
//     });
//   }
// };

module.exports = { requireSignIn };
