import React from 'react'
import TodoItem from './TodoItem'

const TodoLIst = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
    return (
        <>
            <div className='flex flex-col items-center'>
                {todos.length === 0 ? (
                    <h1 className='text-center text-gray-500 text-md md:text-2xl font-bold'>Todo is empty</h1>
                ) : (
                    todos.map((item) => {
                        return (
                            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                        )
                    })
                )}
            </div>
        </>
    )
}

export default TodoLIst