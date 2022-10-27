import pool from "../../db";

const verifyUser = async (req, res) => {
  const verifyTokens = req.query.verifyToken;

  try {
    const user = await pool.query(
      `SELECT user_token FROM users WHERE user_token=$1`,
      [verifyTokens],
      (err, results) => {
        if (err) {
          throw err;
        }

        // if (results.rows.length < 1) {
        //   res.status(202).send("Token not found, Please sign up.");
        //   return;
        // }

        if (results.rows.length) {
          pool.query(`UPDATE users SET verified = true WHERE user_token= $1`, [
            verifyTokens,
          ]);
          res.status(200).send("verified user success");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default verifyUser;
