const express = require("express");
const { authRouter } = require("./Routes/auth.router");
const connection = require("./Utility/database");
const cors = require("cors");
const { userRouter } = require("./Routes/user.router");
//DEFINE APP USING EXPRESS
const app = express();

// MIDDLEWARE FOR ACCEPT JSON DATA FROM REQUEST BODY
app.use(express.json());
app.use(cors());
// API ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/profile", userRouter);
//HANDLING ERROR MIDDLEWARE
app.use((error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal Server Error";
  return res.status(statusCode).send({
    success: false,
    statusCode: statusCode,
    message,
  });
});

//SERVER LISTEN AT PORT
let port = process.env.PORT || 3200;
app.listen(port, (req, res) => {
  try {
    connection();
    console.log("Server Is Listing On Port " + port);
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
});
