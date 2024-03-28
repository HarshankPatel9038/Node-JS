const nodemailer = require("nodemailer");
const path = require("path");

const mailSender = async (req, res, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAILSENDER_USER,
      pass: process.env.MAILSENDER_PASS
    },
  });

  const mailOptions = {
    from: {
      name: 'eCommerce MongoDB',
      address: process.env.MAILSENDER_USER
    },
    to: req,
    subject: "User Registration",
    text: "That was easy!",
    html: "<h1>Welcome To eCommerce MongoDB</h1><b>That was easy!</b>",
    attachments: [
      {
        filename: 'Invoice PDF',
        path: path.join(__dirname, 'document/invoice.pdf'),
        contentType: 'application/pdf'
      }
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.res);
    }
  });

}

module.exports = mailSender;