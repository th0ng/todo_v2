import React, { useState, useEffect } from "react"
import todoService from '../services/todo';
import { Header, Todo, Form} from "../components"

const Homepage = () => {
  // Declaring variables
  const [darkMode, setDarkMode] = useState(false)
  const [todolist, setTodolist] = useState([])
  const [message, setMessage] = useState(null)
  const [newTodoItem, setNewTodoItem] = useState('')

  const hook = () => {
    todoService.getAll().then((tasks) => setTodolist((tasks)))
  }
  useEffect(hook, []);


  // Declaring function for displaying, changing, adding, removing new item
  const handleChange = (event) => {
    setNewTodoItem(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodoItem) {
      const newItem = {id: todolist.length + 1, task: newTodoItem}
      const newList = [...todolist, newItem];
      setTodolist(newList);
      setNewTodoItem('');
      setMessage("Added new item successfully!")
      setTimeout(() => {setMessage(null)}, 1500)
    } else {
      setMessage("Please don't add an empty item")
      setTimeout(() => {setMessage(null)}, 1500)
    }
  }

  const handleRemove = (item) => {
    const newList = todolist.filter(element => element !== item);
    setTodolist(newList);
    setMessage("Item removed!")
    setTimeout(() => {setMessage(null)}, 1500)
  }

  return (
    // default mode: light
    <div className={`${darkMode && "dark-mode"}`}> 
      <div className="container">  
      <Header handleToggleDarkMode={setDarkMode} currentMode={darkMode}/>
      <Form newItem={newTodoItem} handleChange={handleChange} handleSubmit={handleSubmit} message={message} />
      <Todo todolist={todolist} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default Homepage;
