import React, { useState } from 'react'

const TodoInput = ({ addTodo, todos}) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        console.log('clicked')
        if (input === '' || input.trim() === '') {
            setInput('')
            alert('Please enter a valid todo')
            return;
        }

        const existTodo = todos.find((todo) => todo.task.toLowerCase() === input.toLowerCase());

        if (existTodo) {
            alert('Todo already exist')
            setInput('')
            return
        }
        addTodo(input)
        setInput('')
    }
    const inputSubmit = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    return (
        <>
            <div className='flex flex-col md:flex-row gap-2 p-2 justify-center items-center'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => inputSubmit(e)}
                    className='text-md md:text-xl font-bold text-gray-500 outline-none border-2 border-green-500 rounded-md p-1 md:p-2 bg-white w-[80vw]'
                    placeholder='Enter Todo...'
                    type="text" />
                <button
                    onClick={() => handleSubmit()}
                    className='text-md md:text-xl font-bold bg-green-500 hover:bg-green-600 cursor-pointer text-white p-1 md:p-2 rounded-md w-[80vw] md:w-[10vw]'
                >Add Todo</button>
            </div>
        </>
    )
}

export default TodoInput