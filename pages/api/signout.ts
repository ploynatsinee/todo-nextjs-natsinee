import pool from "../../db";

type ResponseData = {
  message: string;
};

const signOut = async (req, res) => {
  if (req.method === "POST") {
    try {
      res.removeHeader("user_token");
      res.status(200).send("You are logged out");
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
};

export default signOut;
