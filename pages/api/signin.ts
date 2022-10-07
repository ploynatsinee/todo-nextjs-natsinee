import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type ResponseData = {
  message: string;
};

const signIn = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = await pool.query(
    `SELECT * FROM users WHERE first_name='${name}' AND email='${email}' AND password='${password}' `
  );

  if (req.method === "POST") {
    if (user) {
      try {
        console.log("inside");
        const JWT = req.body.name;
        const token = jwt.sign(JSON.stringify(JWT), process.env.MY_SECRET);
        res.setHeader("user_token", token);
        res.status(200).json({ message: "Signin success" });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    }
  } else {
    res.status(200).json({ message: "Please sign up before you can sign in." });
  }
};

export default signIn;
