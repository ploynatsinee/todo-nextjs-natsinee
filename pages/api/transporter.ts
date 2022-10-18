import nodemailer from "nodemailer";

const sendTokenToUser = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-server",
        port: 1025
      });
}

export default sendTokenToUser;