import './App.css';
import React, { useState, useEffect } from 'react'

const removeIcon = <svg t="1615845268764" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1102" width="200" height="200"><path d="M469.333333 451.669333l268.501334-268.501333 60.330666 60.330667L529.664 512l268.501333 268.501333-60.330666 60.330667L469.333333 572.330667l-268.501333 268.501333-60.330667-60.330667L409.002667 512 140.501333 243.498667l60.330667-60.330667z" fill="#ffffff" p-id="1103"></path></svg>
const completeIcon = <svg t="1615857177082" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2016" width="200" height="200"><path d="M499.7587 800.00032 184.85566 474.771097l80.721463-65.702398 182.094268 145.004535c74.617441-90.096994 240.284575-268.907473 468.845131-411.111219l19.241226 45.057195C725.971791 383.722428 554.202683 659.205667 499.7587 800.00032L499.7587 800.00032 499.7587 800.00032zM894.33329 417.391249c7.199982 29.791513 11.047614 60.889789 11.047614 92.89369 0 217.60197-176.406732 394.009725-394.018935 394.009725-217.604016 0-394.013819-176.411849-394.013819-394.009725 0-217.60811 176.408779-394.017912 394.013819-394.017912 54.121642 0 105.691157 10.921747 152.634306 30.66644L663.996275 92.050486c-47.605228-17.377786-99.013061-26.861788-152.634306-26.861788-245.815545 0-445.092148 199.276602-445.092148 445.096241 0 245.810429 199.276602 445.087031 445.092148 445.087031 245.820662 0 445.095217-199.276602 445.095217-445.087031 0-31.858592-3.354398-62.932308-9.717316-92.89369L894.33329 417.391249 894.33329 417.391249zM894.33329 417.391249" p-id="2017" fill="#1afa29"></path></svg>
const IncompleteIcon = <svg t="1615857177082" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2016" width="200" height="200"><path d="M499.7587 800.00032 184.85566 474.771097l80.721463-65.702398 182.094268 145.004535c74.617441-90.096994 240.284575-268.907473 468.845131-411.111219l19.241226 45.057195C725.971791 383.722428 554.202683 659.205667 499.7587 800.00032L499.7587 800.00032 499.7587 800.00032zM894.33329 417.391249c7.199982 29.791513 11.047614 60.889789 11.047614 92.89369 0 217.60197-176.406732 394.009725-394.018935 394.009725-217.604016 0-394.013819-176.411849-394.013819-394.009725 0-217.60811 176.408779-394.017912 394.013819-394.017912 54.121642 0 105.691157 10.921747 152.634306 30.66644L663.996275 92.050486c-47.605228-17.377786-99.013061-26.861788-152.634306-26.861788-245.815545 0-445.092148 199.276602-445.092148 445.096241 0 245.810429 199.276602 445.087031 445.092148 445.087031 245.820662 0 445.095217-199.276602 445.095217-445.087031 0-31.858592-3.354398-62.932308-9.717316-92.89369L894.33329 417.391249 894.33329 417.391249zM894.33329 417.391249" p-id="2017" fill="#ffffff"></path></svg>

const init_Todos = [
  { text: 'Learn About React', iscomplete: false },
  { text: 'Meet Friends', iscomplete: true },
  { text: 'New Books', iscomplete: false }
]

function Todo({ todo, removeTodo, index, completeHandle }) {

  return (
    <div className='todo-value'
      onClick={() => completeHandle(index)}>
      <div className='task' style={{ textDecoration: todo.iscomplete ? 'line-through' : 'none' }}>
        {todo.iscomplete ? completeIcon : IncompleteIcon}
        {todo.text}
      </div>
      <a href='#!' className='remove' onClick={(e) => removeTodo(e, index)}>
        {removeIcon}
      </a>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(value);
    if (!value) return;

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
        onChange={(e) => setValue(e.target.value)}
        placeholder="Primary input"
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || init_Todos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  }, [todos])

  const addTodo = (text) => {
    const newTodos = [{ text, iscomplete: false }, ...todos]
    setTodos(newTodos)
  }

  const removeTodo = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeHandle = (index) => {
    const newTodos = [...todos];
    newTodos[index].iscomplete = !newTodos[index].iscomplete;
    setTodos(newTodos)

  }

  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((value, key) => (
          <Todo key={key}
            todo={value}
            index={key}
            removeTodo={removeTodo}
            completeHandle={completeHandle}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
