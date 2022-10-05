import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const signIn = async (req, res) => {
  console.log("test");

  const name = req.body.name;
  const email = req.body.email;

  const user = await pool.query(
    `SELECT * FROM users WHERE first_name='${name}' AND email='${email}' `
  );

  if (req.method === "POST") {
    if (user) {
      try {
        console.log("inside");
        res.status(200).json({ message: "Signin success" });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    }
  } else {
    res.status(200).json({ message: "Please sign up before you can sign in." });
  }

  console.log("exit");
};

export default signIn;
