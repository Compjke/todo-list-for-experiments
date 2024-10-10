import {useReducer} from 'react'
import AddTodoForm from "./components/AddForm/AddTodoForm.jsx";
import './App.css'
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import {todoReducer} from "./reducer.js";

const initTodos = [
    {
        id : 0,
        heading : "List 1" ,
        list : [{
            id: 1,
            title : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem consequatur doloribus expedita ipsa itaque iusto labore minus nemo non odio, quaerat quia quibusdam quisquam repellat soluta, ullam. Neque, non`
        }]
    },{
        id : 1,
        heading : "List 2" ,
        list : [
            {
            id: 1,
            title : 'Item 2'
            }
        ]
    }
]


function App() {
  const [todos, dispatch] = useReducer(todoReducer , initTodos);


  return (
    <>
      {/*<div className='container'>*/}
      {/*    {testSrcImgArray(25).map((src,i) => (*/}
      {/*        <img key={i} src={src} />*/}
      {/*    ))}*/}
      {/*</div>*/}
        <section className='todo-container'>
            <h1>Your fucking todo list</h1>
            <AddTodoForm {...{todos,dispatch}}/>
            <ul className='todo-list'>
                {todos.length > 0 ? todos.map((item) => (
                    <TodoItem dispatch={dispatch} key={item.id} item={item}/>
                )) : <div>
                    There are not any active todos
                </div>}
            </ul>
        </section>
    </>
  )
}

export default App


