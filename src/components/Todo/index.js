import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import TodoItem from "../TodoItem";
import TodoHeader from "../TodoHeader";
import axios from "axios";


const Todo = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")
    useEffect(()=> {
        axios("https://6115f1038f38520017a3863c.mockapi.io/todos")
            .then(({data})=>setTodos(data))
    }, [])

    const handleInput = (e) => {
        setValue(e.target.value)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && value.trim()) {
            addTodo()
        }}
    const addTodo = () => {
        const newTodo = {
            id: nanoid(),
            title: value,
            createdAt: +new Date()
        }
        axios.post("https://6115f1038f38520017a3863c.mockapi.io/todos", newTodo)
            .then(({data})=>  setTodos([...todos, data]))
        setValue("")
    }
    const deleteTodo = (id) => {
        axios.delete(`https://6115f1038f38520017a3863c.mockapi.io/todos/${id}`)
            .then(({data})=>setTodos(todos.filter(item => item.id !== id)))

    }
    const saveTodo = (id, title) => {
        axios.put(`https://6115f1038f38520017a3863c.mockapi.io/todos/${id}`, {title:title})
            .then(({data})=>setTodos(todos.map(item => item.id === id ? data : item)))

    }
    const filteredDate = (type) => {
        const time = {
            Day: 24 * 60 * 60 * 1000,
            Week: 24 * 60 * 60 * 1000 * 7,
            Month: 24 * 60 * 60 * 1000 * 30,
            All: +new Date()
        }
        axios("https://6115f1038f38520017a3863c.mockapi.io/todos")
            .then(({data})=>setTodos(data.filter(item=> +new Date() - item.createdAt < time[type])))
    }

    const clearAll =(id) => {
        todos.forEach(el=>
        axios.delete(`https://6115f1038f38520017a3863c.mockapi.io/todos/${id}`))
           setTodos([])
    }

    const doneTodo= (id, status) => {
        axios.put(`https://6115f1038f38520017a3863c.mockapi.io/todos/${id}`, {isDone:!status})
            .then(({data})=>setTodos(todos.map(item => item.id === id ? data : item)))

    }
    return (
        <div className="row my-5">
            <div className="col-4 offset-4">
                <TodoHeader value={value} handleInput={handleInput} addTodo={addTodo} handleKeyPress={handleKeyPress}
                            filteredDate ={filteredDate}
                            length={todos.length} todos={todos}/>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <TodoItem  key={item.id} item={item} saveTodo={saveTodo} deleteTodo={deleteTodo} doneTodo={doneTodo}
                                      handleInput={handleInput}/>
                        )}
                </ul>
                <button type="button" className="btn btn-danger mt-3 w-100" onClick={ ()=> clearAll(todos.id)}>Clear all
                </button>
            </div>
        </div>

    )
};

export default Todo;