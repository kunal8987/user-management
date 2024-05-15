const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// CONNECTION FUNCTION TO CONNECT THE MONGODB DATABASE
let connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Server Is Connected To Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error Form Db File ${error.message}`);
  }
};

module.exports = connection;
