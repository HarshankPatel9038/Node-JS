const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

let otpCode = Math.floor(1000 + Math.random() * 9000);

const sendOTP = (req, res, next) => {

  client.messages
    .create({
      body: `Your OTP Is: ${otpCode}`,
      to: process.env.MOBILE_NUMBER, // Text your number
      from: process.env.TWILIO_VERIFY_MOBILE_NUMBER, // From a valid Twilio number
    })
    .then((message) => {
      req.session.otpCode = otpCode;
      console.log(req.session);
      next();
    });
};

const verifyOTP = (req, res, next) => {
  console.log(req.session);
  let enteredOTP = req.body.otp;
  let storedOTP = req.session.otpCode;
  console.log(enteredOTP, storedOTP);

  if (enteredOTP && storedOTP && enteredOTP == storedOTP) {
    next();
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

module.exports = {
  sendOTP,
  verifyOTP
};