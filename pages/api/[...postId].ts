export default function handler(req, res) {
  const { name,todo } = req.query["name"];
  res.status(200).json({ name: name, todos: todo });
}
