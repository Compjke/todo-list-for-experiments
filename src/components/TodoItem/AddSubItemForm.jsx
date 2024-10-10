import styles from './todo-item.module.css'
import {useEffect, useState} from "react";
import {ADD_NEW_SUBITEM} from "../../reducer.js";
const AddSubItemForm = ({todoId,dispath}) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null);

    useEffect(() => {
        if(title && error) {
            setError(null)
        }
    }, [title])
    const handleAddNewSubItem = (e) => {
        e.preventDefault()
        if(!title){
            setError("Fill the field")
            return
        }
        const id = Math.random() * 100
        const newSubItem = {
            id,
            title,
        }
        dispath({type : ADD_NEW_SUBITEM , payload : {id : todoId, newSubItem}})
        setTitle('')
        setError(null)
    }
    return (
        <>
        <form className={styles.addSubitemForm} onSubmit={handleAddNewSubItem}>
            <input  value={title}
                    onChange={e => setTitle(e.target.value)}
                   placeholder={'Add new subitem...'} type="title"
            />
            <button>+</button>
        </form>
            {error && <span style={{fontSize : "10px"}}>{error}</span>}
        </>
    )
}
export default AddSubItemForm
