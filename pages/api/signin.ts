import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ErrorSharp } from "@mui/icons-material";

type ResponseData = {
  message: string;
};

const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (req.method === "POST") {
    const user = await pool.query(
      `SELECT * FROM users WHERE email= $1 AND password= $2 `,
      [email, password],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);

        if (!results.rows.length) {
          res.status(401).json({ message: "User not found" });
          return;
        }

        if (!email || !password) {
          res
            .status(401)
            .json({ message: "Please fill out the information completely." });
          return;
        }

        if (results.rows.length) {
          try {
            const JWT = req.body.email;
            const token = jwt.sign(JSON.stringify(JWT), process.env.MY_SECRET);
            res.setHeader("user_token", token);
            res.status(200).json({ message: "Signin success" });
          } catch (error) {
            res.status(400).send(error);
            console.log(error);
          }
        }
      }
    );

    // const output = user.rows;

    // if (!email || !password) {
    //   res
    //     .status(401)
    //     .json({ message: "Please fill out the information completely." });
    //   return;
    // }
    // if (!output.length) {
    //   res.status(401).json({ message: "User not found" });
    //   return;
    // }
  }
};

export default signIn;
