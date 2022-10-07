import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const signOut = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const user = await pool.query(
    `SELECT * FROM users WHERE first_name='${name}' AND email='${email}' AND password='${password}'`
  );

  if (req.method === "POST") {
    if (name && email && password) {
      try {
        res.removeHeader("user_token");
        res.send("You are logged out");
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    }
  }

  if (!user) {
    try {
      res
        .status(200)
        .json({ message: "Please sign up before you can sign out." });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
};

export default signOut;
