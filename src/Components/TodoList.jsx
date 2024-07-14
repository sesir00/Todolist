import React, { useState , useEffect} from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  function addTask(){
    const task = document.getElementById('inputTask').value.trim();
    if(task){
      setTodo([...todo, task]);
      document.getElementById('inputTask').value = "";
    }
  }

  function removeTask(index){
    setTodo(todo.filter( (event, i) => i!=index ));
  }

  
  useEffect(() => {
    // Load tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('todo'));
    if (storedTasks) {
      setTodo(storedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <h1>To-Do-List</h1>
      <div className="input-container">
        <input
          className="input"
          name="text"
          type="text"
          id="inputTask"
          placeholder="Write a task..."
        /> 
        <button className="btn" onClick={addTask}> Add
        </button>
      </div>

      <div className="myList">
      <ul>
          {todo.map( (todo, index) => 
            <li key={index} >
              {todo} <button className="removebtn" onClick={() =>removeTask(index)}>Remove</button>
            </li>)}
        </ul>
      </div>
      
    </div>
  );
};

export default TodoList;
