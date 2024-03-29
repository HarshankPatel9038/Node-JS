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
      console.log(message.sid);
      // req.session.otpCode = otpCode;
      // req.session.otpCodeExpiration = Date.now() + 60000;
    });
};

const verifyOTP = (req, res, next) => {
  let enteredOTP = req.body.otp;
  // let storedOTP = req.session.otpCode;
  let storedOTP = otpCode;

  if (enteredOTP && storedOTP && enteredOTP.toString() === storedOTP.toString()) {
    next();
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

module.exports = {
  sendOTP,
  verifyOTP
};