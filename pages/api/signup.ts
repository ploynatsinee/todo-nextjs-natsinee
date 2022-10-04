// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pool = require("../../db");
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string
}

export default async function createUser (req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  return new Promise<void>((resolve) => {
    const { name, email } = req.body;
    if (req.method === "POST") {
      try {
        pool.query(
          "INSERT INTO users (first_name, email) VALUES ($1, $2) RETURNING *",
          [name, email],
          () => {
            res.status(201).json({  message: 'signup success' });
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

// export default createUser;
