import styles from './add-todo.module.css'
import {useRef, useState} from "react";
import {ADD_NEW_TODO} from "../../reducer.js";

const AddTodoForm = ({todos , dispatch}) => {

    const [newTodoHeadiang, setNewTodoHeadiang] = useState('');
    const inputRef = useRef(null)
    const handleAddTodo = (e) => {
        e.preventDefault()
        if(!newTodoHeadiang){
            inputRef.current.placeholder = 'Type something !!!!'
            return
        }
        const id = todos.length > 0 ? todos.length + 1 : 0

        const newTodo = {
            id,
            heading : newTodoHeadiang ,
            list : []
        }

        dispatch({type : ADD_NEW_TODO , payload : newTodo})
        setNewTodoHeadiang('')
    }


    return (
        <form className={styles['add-todo-form']} onSubmit={handleAddTodo}>
            <h2>Add new todo</h2>
            <div className={styles.actions}>
                <input value={newTodoHeadiang}
                       ref={inputRef}
                       onChange={e => setNewTodoHeadiang(e.target.value)}
                       type="text"  className='todo-input'
                />
                <button  className='todo-btn'>+</button>
            </div>
        </form>
    )
}
export default AddTodoForm
