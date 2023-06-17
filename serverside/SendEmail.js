import nodemailer from "nodemailer";

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bi19110060@student.ums.edu.my",
      pass: "000309121063",
    },
  });

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send mail

const EmailSender = ({ fullName, email, message }) => {
  const options = {
    from: `Kinabalu GolfClub Contact Form`,
    to: "bi19110060@student.ums.edu.my",
    subject: "Message from Kinabalu GolfClub Contact Form",
  };
};
