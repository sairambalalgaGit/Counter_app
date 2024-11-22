import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([{
    title : "go to gym",
    description : " go to gym from 7-9",
    completed : false
  },
  {
    title : "study dsa",
    description : "study dsa form 9-11",
    completed : true
  },{
    title : "study dsa",
    description : "study dsa form 9-11",
    completed : true
  }]);

  function addTodo(){
    setTodos([...todos, {
      title : "new todo",
      description: "nothing to change"
    }]);
  }

  return(
    <div>
      {/* <Todo title={todos[0].title}  description={todos[0].description} />
      <Todo title={todos[1].title}  description={todos[1].description} /> */}

      <button onClick={addTodo}> Add a Random todo </button>
      {
        todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} />
        })
      }
    </div>
  )
}

function Todo(props){
    return(
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    )
}

export default App
