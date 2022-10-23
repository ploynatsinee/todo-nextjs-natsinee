import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const sendTokenToUser = (email, url) => {
  const usersUrl = "http://localhost:3000/api" + "/verify?verifyToken=" + url
  
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
      text: "Click on the link below to veriy your account " + usersUrl,
    });
  
  } catch (error) {
    console.log(error);
  }
};

export default sendTokenToUser;
