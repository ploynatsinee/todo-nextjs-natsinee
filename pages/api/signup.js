import pool from "../../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import sendTokenToUser from "../../utils/transporter";

// type ResponseData = {
//   message: string;
// };

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const emailToValidate = req.body.email;
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (req.method === "POST") {
    if (!name || !email || !password) {
      res.status(202).send("Please fill out the information completely.");
      return;
    }

    if (name.length > 25) {
      res.status(202).send("Name must less than 25 character.");
      return;
    }

    if (password.length < 7 || password.length > 25) {
      res.status(202).send("Password must between 7-25 character.");
      return;
    }

    try {
      if (name && email && password) {
        if (emailRegexp.test(emailToValidate)) {
          bcrypt.hash(password, 10).then(async (hash) => {
            const result = await pool.query(
              "INSERT INTO users (first_name, email, password) VALUES ($1, $2, crypt($3, gen_salt('bf')))",
              [name, email, password]
            );

            const userToken = await pool.query(
                `UPDATE users SET user_token = crypt($1, gen_salt('md5')) WHERE first_name= $2`,
                [email,name]
            );
            // console.log(userToken);

            // console.log(JWT);

            sendTokenToUser(email);
            res.status(201).send({ name: name, email: email, password: hash });
          });
        } else {
          res.status(202).send("Invalid Email");
          return;
        }
      }
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  } else {
    res.status(405).send("Method not allowed.");
  }
};

export default createUser;
