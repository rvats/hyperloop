import React, {useState} from 'react'
import TodoList  from "./TodoList";
function App() {
  const [todos, setTodos] = useState(['Prepare the Presentation', 'Do the Demo with Hyperloop team', 'Discuss the Presentation and Demo'])
  return (
    <div>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do </div>
    </div>
  );
}

export default App;
