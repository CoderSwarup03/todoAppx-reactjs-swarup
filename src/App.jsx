import React, { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoLIst from './components/TodoLIst';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  }
  const toggleTodo = (id) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  return (
    <>
      <div className='bg-gray-100 h-screen'>
        <h1 className='text-lg md:text-3xl font-bold text-center text-green-500 p-4'>Todo App🗒️</h1>
        <TodoInput addTodo={addTodo} todos={todos} />
        <TodoLIst todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      </div>
    </>
  )
}

export default App