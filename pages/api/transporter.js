import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

const sendTokenToUser = async (req, res) => {
  const { email } = "admin30@gmail.com";
  try {

    const transporter = nodemailer.createTransport(
      smtpTransport("SMTP", {
        host: "smtp-server",
        port: 1025,
        auth: {
          user: "user@mailserver.com",
          pass: "passwd",
        },
        // authMethod: "NTLM",
        secure: false,
        tls: { rejectUnauthorized: false },
        debug: true,
        
      })
    );

      // solution 2

    // nodemailer.createTransport("smtps://user%myDomain.com:pass@smtp.gmail.com");
    // const smtpConfig = {
    //   host: "smtp.gmail.com",
    //   port: 1025,
    //   auth: {
    //     user: "user@myDomain.com",
    //     pass: "pass@pass",
    //   },
    //   authMethod: "NTLM",
    //   secure: false,
    //   tls: { rejectUnauthorized: false },
    //   debug: true,
    // };
    // const transporter = nodemailer.createTransport(smtpConfig);

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
