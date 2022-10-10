import Addtodo from "../components/todo/Addtodo"
import Textfield from "../components/todo/Textfield"
import List from "../components/todo/List"

function HomePage() {
  return (
  <div>Welcome to Todo App!
      <div className="add">
        <Textfield />
        <Addtodo />
      </div>
        <List />
      </div>

  )
}

export default HomePage