import Addtodo from "../components/todo/Addtodo";
import List from "../components/todo/List";
import Signoutbtn from "../components/Signoutbtn"
// import { useRouter } from 'next/router';

function HomePage() {

  // const router = useRouter();
  // const { user_id } = router.query;
  // const query = router.query;


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