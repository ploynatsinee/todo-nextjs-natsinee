import pool from "../../db";
import jwt from "jsonwebtoken";

type ResponseData = {
  message: string;
};

const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (req.method === "POST") {
    if (!email || !password) {
      res.status(202).send("Please fill out the information completely.");
      return;
    }

    const user = await pool.query(
      `SELECT * FROM users WHERE email = $1 AND password = crypt($2 , password) `,
      [email, password],
      (err, results) => {
        if (err) {
          throw err;
        }
        // console.log(results.rows);

        if (!results.rows.length) {
          res
            .status(202)
            .send("User not found, Please recheck your email or password");
          return;
        }

        if (results.rows.length) {
          try {
            const JWT = req.body.email;
            const token = jwt.sign(JSON.stringify(JWT), process.env.MY_SECRET);
            res.setHeader("user_token", token);
            res.status(200).send("Signin success");
          } catch (error) {
            res.status(400).send(error);
            console.log(error);
          }
        }
      }
    );
  }
};

export default signIn;
