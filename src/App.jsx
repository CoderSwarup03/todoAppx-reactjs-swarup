import React, { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoLIst from './components/TodoLIst';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, [])

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  const deleteTodo = (id) => {
    const deleteTodos = todos.filter((item) => item.id !== id);
    setTodos(deleteTodos);
    localStorage.setItem('todos',JSON.stringify(deleteTodos));
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
        