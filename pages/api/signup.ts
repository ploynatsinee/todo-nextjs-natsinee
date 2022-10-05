// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const createUser = async (req, res) => {
  console.log("test");

  const { name, email } = req.body;

  if (req.method === "POST") {
    try {
      console.log("inside");

      const result = await pool.query(
        "INSERT INTO users (first_name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
      );
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  } else {
    res.status(200).json({ message: "hello" });
  }

  console.log("exit");
};

export default createUser;
