import React, {useState} from 'react'

export default function TodoList(todos) {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <h1>To Do List</h1>
      { todos.Length }
    </div>
  )
}
