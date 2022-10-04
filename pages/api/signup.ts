// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pool = require("../../db");
import type { NextApiRequest, NextApiResponse } from "next";

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise<void>((resolve) => {
    const { name, email } = req.body;
    if (req.method === "POST") {
      try {
        const result = pool.query(
          "INSERT INTO users (first_name, email) VALUES ($1, $2) RETURNING *",
          [name, email],
          (error, results) => {
            res.status(201).json({ message: 'success' });
          }
        );
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    }
    return resolve();
  });
};

export default createUser;
