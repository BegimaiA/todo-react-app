import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faSave, faCheck} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({item, saveTodo, deleteTodo, doneTodo}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(item.title)
    const handleEdit = () => {
        setIsEdit(true)
    }
    const handleSave =() => {
        saveTodo(item.id, newTitle)
        setIsEdit(false)
    }
    const handleNewValue =(e) => {
        setNewTitle(e.target.value)
    }

    return (
        <li   className="list-group-item d-flex justify-content-between align-items-center" >
            {
                isEdit? <input type="text" className="form-control me-3" defaultValue={item.title} onChange={handleNewValue}/> : <span className={item.isDone && "text-decoration-line-through"}>{item.title}</span>
            }
            <div className="d-flex">
                {
                    ! isEdit && <button type="button" className="btn btn-outline-success me-2"
                                      onClick={() => doneTodo(item.id, item.isDone)}><FontAwesomeIcon icon={faCheck}/>
                    </button>
                }
                <button type="button" className="btn btn-outline-warning me-2" onClick={isEdit? handleSave : handleEdit}>
                    {
                        isEdit? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>
                    }
                    </button>
                <button type="button" className="btn btn-outline-danger"
                        onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </li>

    );
};

export default TodoItem;