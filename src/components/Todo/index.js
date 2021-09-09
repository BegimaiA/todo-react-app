import React, {useState} from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([
        {id:1, title: "Drink tea"},
        { id:2, title: "Go to work"}])
    const [value, setValue] = useState("")
const handleInput =(e) => {
        setValue(e.target.value)
}
const addTodo=() => {
        setTodos([...todos, {title: value}])
}

    return (
        <div className="row my-5">
         <div className="col-4 offset-md-4">
           <div className="d-flex mb-4">
               <input type="text" className="form-control me-2" onChange={handleInput}/>
               <button type="button" className="btn btn-primary"  disabled={!value.trim()} onClick={addTodo}>Add</button>
           </div>
             <ul className="list-group">
                 {
                     todos.map(item=>
                         <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                             <span>{item.title}</span>
                             <div>
                                <button type="button" className="btn btn-warning me-2"> Edit</button>
                                 <button type="button"  className="btn btn-danger">Delete</button>
                             </div>
                         </li>)
                 }
             </ul>
         </div>
        </div>

    )};

export default Todo;