import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const sendTokenToUser = async (req, res) => {
  const email = "admin444@gmail.com";
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-server",
      port: 1025,
      secure: false,
      tls: { rejectUnauthorized: false },
      debug: true,
    });

    const messageStatus = transporter.sendMail({
      from: "My Company <company@companydomain.org>",
      to: email,
      subject: "Hi! Please confirm your email.",
      text: "This is the email content",
    });
    // res.json("Sent!").status(200);
  } catch (error) {
    console.log(error);
    // res.json("Error sending message!").status(500);
  }
};

export default sendTokenToUser;
