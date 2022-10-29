import Addtodo from "../components/todo/Addtodo";
import List from "../components/todo/List";
import Signoutbtn from "../components/Signoutbtn"


function HomePage() {
  return (
    <div className="add">
      <h1>Welcome to Todo App</h1>
      <Addtodo />
      <List />
      <Signoutbtn />
    </div>
  );
}

export default HomePage;