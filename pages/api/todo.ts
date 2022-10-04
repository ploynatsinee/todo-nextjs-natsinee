// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pool = require("../../db");
import type { NextApiRequest, NextApiResponse } from "next";

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise<void>((resolve) => {
    const { todo } = req.body;
    if (req.method === "POST") {
      try {
        pool.query(
          "INSERT INTO todos (todo) VALUES ($1) RETURNING *",
          [todo],
          () => {
            res.status(201).json({ message: 'create todo success' });
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

export default createTodo;
