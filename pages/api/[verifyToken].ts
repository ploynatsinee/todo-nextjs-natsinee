export default function handlerToken(req, res) {
    const { user_token } = req.query["user_token"];
    res.status(200).json({ user_token: user_token});
}
  