// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";

const createTodo = async (req, res) => {
  const { todo } = req.body;
  const data = req.body;

  if (req.method === "POST") {
    try {
      await pool.query("INSERT INTO todos (todo) VALUES ($1) RETURNING *", [todo]);
      res.status(201).json({ message: "create todo success" });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "DELETE") {
    try {
      pool.query(`DELETE FROM todos WHERE todo= $1 `, [todo]);
      res.status(200).json({ message: "delete todo success" });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "GET") {
    try {
      const todoData = await pool.query("SELECT * FROM todos;");
      res.status(200).json(todoData.rows);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
  if (req.method === "PUT") {
    try {
      const result = await pool.query(`UPDATE todos SET isSuccessful = true WHERE todo= $1`,[todo]);
      res.status(200).json({ message: "toggle todo success" });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
  if (req.method === "PATCH") {
    try {
      const result = await pool.query(`UPDATE todos  SET isSuccessful = false WHERE todo= $1`,[todo]);
      res.status(200).json({ message: "Un toggle todo success" });
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
};

export default createTodo;
