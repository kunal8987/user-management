const express = require("express");
const { authRouter } = require("./Routes/auth.router");

//DEFINE APP USING EXPRESS
const app = express();

// MIDDLEWARE FOR ACCEPT JSON DATA FROM REQUEST BODY
app.use(express.json());

// API ROUTES
app.use("/api/v1/auth", authRouter);

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
app.listen(3200, (req, res) => {
  try {
    console.log("listening on port");
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
});
