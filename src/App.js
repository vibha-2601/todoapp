import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList';
function App() {

   // data
  const [todoList, setTodoList] = useState([]);

  // add functionality
  let addToDo = (inputText) => {
    setTodoList([...todoList, inputText]);
    
  };
  return (
    <div className="App">
      <TodoInput addToDo={addToDo}/>
      <div style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>
        TODO
      </div>
      <hr style={{ width: "80%" }}></hr>
<TodoList />
    </div>
  );
}

export default App;
