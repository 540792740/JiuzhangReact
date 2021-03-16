import './App.css';
import React, { useState } from 'react'

const removeIcon = <svg t="1615845268764" className = "icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1102" width="200" height="200"><path d="M469.333333 451.669333l268.501334-268.501333 60.330666 60.330667L529.664 512l268.501333 268.501333-60.330666 60.330667L469.333333 572.330667l-268.501333 268.501333-60.330667-60.330667L409.002667 512 140.501333 243.498667l60.330667-60.330667z" fill="#ffffff" p-id="1103"></path></svg>

const init_Todos = [
  'Learn About React', 
  'Meet Friends',
  'New Books'
]

function Todo({todo, removeTodo, index}){
  return (
    <div className='todo-value'>
      {todo}
      <a href='#!' className='remove' onClick={(e)=> removeTodo(e, index )}>
        {removeIcon}
      </a>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('')
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    addTodo(value);
    if(!value) return;

    // clear input value
    setValue('')
  }

  return (
    <form className='todo-value'
          onSubmit={onSubmitHandler}
    >
      <input className="input is-primary" 
             type="text" 
             value={value}
             onChange={(e)=>setValue(e.target.value)}
             placeholder="Primary input" 
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState(init_Todos)

  const addTodo = (text) => {
    const newTodos = [text, ...todos]
    setTodos(newTodos)
  }

  const removeTodo = (e, index) =>{
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  
  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={addTodo}/>
        {todos.map((value, key) =>(
          <Todo key={key} todo={value} index={key} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
