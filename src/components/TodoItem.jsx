import React from 'react'
import { MdDone } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const TodoItem = ({ item, deleteTodo, toggleTodo }) => {
    return (
        <>
            <div className='bg-white rounded-md p-3 m-2'>
                <div className='flex flex-col md:flex-row justify-between items-center border border-green-500 rounded-md p-2'>
                    <div className='w-[90%] border-2 border-green-200 overflow-x-scroll'>
                        <h1 className={`text-xl font-bold ${item.completed ? 'line-through' : ''}`}>{item.task}</h1>
                    </div>
                    <div className='flex justify-between gap-[60px] p-3'>
                        <div>
                            <MdDeleteForever
                                onClick={() => deleteTodo(item.id)}
                                className='text-lg md:text-2xl font-bold text-red-500 hover:text-red-600 cursor-pointer' />
                        </div>
                        <div>
                            <MdDone
                                onClick={() => toggleTodo(item.id)}
                                className='text-lg md:text-3xl font-bold cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoItem