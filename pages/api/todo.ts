import pool from "../../db";
import type { NextApiRequest, NextApiResponse } from "next";

const createTodo = async (req, res) => {
  const { todo } = req.body;
  const data = req.body.todo;
  const users_id = req.query.users_id

  if (req.method === "POST") {
    if (!data) {
      res.status(202).send("Please fill out the information completely.");
      return;
    }
    try {
      await pool.query("INSERT INTO todos (todo,userstodos_id) VALUES ($1, $2) RETURNING *", [
        todo, users_id
      ]);
      res.status(201).send("create todo success");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "DELETE") {
    try {
      pool.query(`DELETE FROM todos WHERE todo= $1 `, [todo]);
      res.status(200).send("delete todo success");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "GET") {
    try {
      const todoData = await pool.query(
        "SELECT todos_id, userstodos_id, todo, isSuccessful, users_id FROM todos t LEFT OUTER JOIN users u ON t.userstodos_id = u.users_id WHERE users_id = $1 ORDER BY users_id;",
        [users_id],
        (err, results) => {
          if (err) {
            throw err;
          }
          console.log(results.rows);
          res.status(200).send(results.rows);
        }
      );
      // res.status(200).send(todoData.rows);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "PUT") {
    try {
      const result = await pool.query(
        `UPDATE todos SET isSuccessful = true WHERE todo= $1`,
        [todo]
      );
      res.status(200).send("toggle todo success");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }

  if (req.method === "PATCH") {
    try {
      const result = await pool.query(
        `UPDATE todos  SET isSuccessful = false WHERE todo= $1`,
        [todo]
      );
      res.status(200).send("Un toggle todo success");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
};

export default createTodo;
