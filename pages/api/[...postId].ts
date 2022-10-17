export default function handler(req, res) {
  const { users_id } = req.query["users_id"];
  res.status(200).json({ user_id: users_id});
}
