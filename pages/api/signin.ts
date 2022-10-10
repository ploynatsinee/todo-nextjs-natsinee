import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type ResponseData = {
  message: string;
};

const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await pool.query(
    `SELECT * FROM users WHERE email='${email}' AND password='${password}' `
  );

  const output = user.rows;

  if (req.method === "POST") {

    if(!email || !password) {
      res.status(401).json({ message: "Please fill out the information completely." });
      return;
    }
    if (!output.length) {
      res.status(401).json({ message: "User not found" });
      return;
    }
    if (output.length) {
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
};

export default signIn;
