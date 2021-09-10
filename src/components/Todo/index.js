import React, {useState} from 'react';
import {nanoid} from "nanoid";
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: nanoid(), title: "Drink tea",  createdAt: +new Date()},
        {id: nanoid(), title: "Go to work",  createdAt: +new Date()}])
    const [value, setValue] = useState("")

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const handleKeyPress =(e) => {
        if (e.key === "Enter" && value.trim()) {
            addTodo()
        }}
    const addTodo = () => {
    const newTodo = {
        id: nanoid(),
        title: value,
        createdAt: +new Date()
    }
        setTodos([...todos, newTodo])
        setValue("")
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(item=> item.id !== id))
    }
    const saveTodo =(id, title) => {
        setTodos(todos.map(item=>item.id=== id? {...item, title}: item))
    }

    return (
        <div className="row my-5">
            <div className="col-4 offset-4">
               <TodoHeader value={value} handleInput={handleInput} addTodo={addTodo} handleKeyPress={handleKeyPress} lenght={todos.length} todos={todos}/>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <TodoItem item={item} saveTodo={saveTodo} deleteTodo={deleteTodo} handleInput={handleInput}/>
                            )}
                </ul>
                <button type="button" className="btn btn-danger mt-3 w-100"  onClick={()=>setTodos([])}>Clear all</button>
            </div>
        </div>

    )
};

export default Todo;