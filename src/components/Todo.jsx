import React from 'react'
import {useSelector} from 'react-redux'
import AddForm from './AddForm'
import {useDispatch} from 'react-redux'
import { deleteTodo, markAsDone } from '../features/todo/todoSlice'

const Todo = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    console.log(todos)
    
    const deleteHandler = (id)=>{
        console.log('delete ',id)
        dispatch(deleteTodo(id))
    }

    const markAsDoneHandler = (id) => {
        dispatch(markAsDone(id))
    }

    return (
        <div>
            <h2>Todo List App</h2>
            <AddForm/>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>{todo.task} 
                        <button onClick={() => deleteHandler(todo.id)}>Delete</button> 
                        <button onClick={() => markAsDoneHandler(todo.id)}>Done</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo