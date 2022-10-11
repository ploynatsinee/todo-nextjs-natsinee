import pool from "../../db";

type ResponseData = {
  message: string;
};

const signOut = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (req.method === "POST") {
    if (!email || !password) {
      res
        .status(401)
        .json({ message: "Please fill out the information completely." });
      return;
    }

    const user = await pool.query(
      `SELECT * FROM users WHERE email = $1 AND password = crypt($2 , password) `,
      [email, password],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);

        if (!results.rows.length) {
          res.status(401).json({
            message: "User not found, Please recheck your email or password",
          });
          return;
        }

        if (results.rows.length) {
          try {
            res.removeHeader("user_token");
            res.status(200).json({ message: "You are logged out" });
          } catch (error) {
            res.status(400).send(error);
            console.log(error);
          }
        }
      }
    );
  }
};

export default signOut;
