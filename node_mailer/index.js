const nodemailer = require("nodemailer");
let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "isha19@navgurukul.org",
    pass: "praveenisha",
  },
});

let mailDetails = {
  from: "isha19@navgurukul.org",
  to: "ishabharti.eminence@gmail.com",
  subject: "Check it",
  text: "Happy to sdending mail",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    throw err;
  } else {
    console.log("Email sent successfully");
  }
});
