// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";

const createTodo = async (req, res) => {
  const { todo } = req.body;
  const data = req.body.todo;

  if (req.method === "POST") {
    try {
      pool.query("INSERT INTO todos (todo) VALUES ($1) RETURNING *", [todo]);
      res.status(201).json({ message: "create todo success" });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "DELETE") {
    try {
      pool.query(
        `DELETE FROM todos WHERE todo='${data}' `
      );
      res.status(200).json({ message: "delete todo success" });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
};

export default createTodo;
