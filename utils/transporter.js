import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const sendTokenToUser = (email, url) => {
  
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
      text: `This is the email content ${url}`,
    });
  
  } catch (error) {
    console.log(error);
  }
};

export default sendTokenToUser;
