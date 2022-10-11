import Addtodo from "../components/todo/Addtodo";
import Textfield from "../components/todo/Textfield";
import List from "../components/todo/List";

function HomePage() {
  return (
    <div className="add">
      <h1>Welcome to Todo App</h1>
      <Textfield />
      <Addtodo />
      <List />
    </div>
  );
}

export default HomePage;