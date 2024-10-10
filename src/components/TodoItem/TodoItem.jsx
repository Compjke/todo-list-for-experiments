import styles from './todo-item.module.css'
import AddSubItemForm from "./AddSubItemForm.jsx";
import {DELETE_SUBITEM, DELETE_TODO} from "../../reducer.js";

const TodoItem = ({item , dispatch}) => {

    const handleDeleteTodo = (id) => {
        dispatch({type : DELETE_TODO , payload : {id}})
    }

    const handleDeleteSubItem = (id) => {
        dispatch({type : DELETE_SUBITEM , payload : {id : item.id, subId : id}})
    }

    return (
        <div className={styles['todo-item']}>
        <h2>{item.heading}</h2>
            <AddSubItemForm todoId={item.id} dispath={dispatch}/>
            <ul className={styles.subItemList}>
                {item.list.map((item) => (
                    <li key={item.id} className={styles.subItem}>
                        <p className={styles.subTitle}>
                            {item?.title ?? 'Not title'}
                        </p>
                        <button onClick={() => handleDeleteSubItem(item.id)}>x</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleDeleteTodo(item.id)}>Delete all list</button>
        </div>

    )
}


export default TodoItem
