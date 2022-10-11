
import './App.css';
import React, { useState } from 'react';
import './index.css';

const obj={
  id:2,
  task:"",
  complete: false,
}

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);

  }
  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);

  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      // return task !== taskName;
      if (task === taskName) {
        return false;
      } else {
        return true;
      }


    });

    setTodoList(newTodoList);

  }

  
  return (
    <div className="container">
    <h1 className="text">Todo List</h1>
    <div className="App">
      <div className="addTask">
        <label className="user">Add Todo</label>
        <div></div>
        <input onChange= {handleChange}
         type="text"
         className="form-control" 
         name="Add todo"
        placeholder="Add new todo"/>
        <button onClick = {addTask} className="btn">Submit</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
          <div className="list-items">
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
            <button onClick={() => deleteTask(task)}>C</button>
          </div>
          );
        })}
      </div>
      

    </div>
    </div>
   
    
  );
}

export default App;
