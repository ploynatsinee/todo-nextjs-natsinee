// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

type ResponseData = {
  message: string;
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (req.method === "POST") {
    try {
      if (name && email && password) {
        bcrypt.hash(password, 10).then(async (hash) => {
          const result = await pool.query(
            "INSERT INTO users (first_name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, password]
          );
          res.status(200).json({ name: name, email: email, password: hash });
        });
      } else {
        res.status(204).json({ message: "Please fill out the information completely." });
      }

    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed " });
  }
};

export default createUser;
