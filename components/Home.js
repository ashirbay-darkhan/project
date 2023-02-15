import {Text} from "react-native";
import Header from "./Header";
import ListItems from "./ListItems";
import {useState} from "react";

const Home = () => {
  const initialTodos = [
    {
      title: "Get some snacks",
      date: "Fir, 08",
      key: "1"
    },
    {
      title: "Get some snacks",
      date: "Fir, 08",
      key: "2"
    },
    {
      title: "Get some snacks",
      date: "Fir, 08",
      key: "3"
    },
  ]

  const [todos, setTodos] = useState(initialTodos)

  return (
    <>
      <Header />
      <ListItems
        todos={todos}
        setTodos={setTodos}
      />
    </>
  )
}

export default Home
