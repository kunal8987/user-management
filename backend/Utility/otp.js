const otpGenerator = require("otp-generation");

const generateOtp = () => {
  let otp = otpGenerator.generate(6, {
    digits: true,
  });
  return otp;
};

module.exports = generateOtp();
