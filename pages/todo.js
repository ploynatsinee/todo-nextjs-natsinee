import Addtodo from "../components/todo/Addtodo";
import List from "../components/todo/List";

function HomePage() {
  return (
    <div className="add">
      <h1>Welcome to Todo App</h1>
      <Addtodo />
      <List />
    </div>
  );
}

export default HomePage;