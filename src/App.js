import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
function App() {
  // data
  const [todoList, setTodoList] = useState([]);

  // add functionality
  let addToDo = (inputText) => {
    if(inputText !== '')
    setTodoList([...todoList, inputText]);
  };

  // delete functionality
  const deleteToDo = (key) => {
    let newTodoList = [...todoList];
    newTodoList.splice(key, 1);
    setTodoList([...newTodoList]);
  }

  return (
    <div className="App">
      <TodoInput addToDo={addToDo} />
      <div style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
        TODO
      </div>
      <hr style={{ width: "80%" }}></hr>
      {todoList.map((listItem, index) => (
        <TodoList key={index} index={index} item={listItem} deleteItem={deleteToDo}/>
      ))}
    </div>
  );
}

export default App;
