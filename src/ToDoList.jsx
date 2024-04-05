import { useState } from "react";

function ToDoList(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){

    if(newTask.trim() !== ""){
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask("");
    }

  }

  function removeTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index -1]] = 
      [updatedTasks[index -1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length -1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return(
    <>
    <div className="container">
      <div className="todo-list">
      <h1>TO-DO-LIST</h1>
      </div>

      <div className="list-container">

      <div className="add-task-container">

          <input 
                type="text" 
                className="add-task" 
                placeholder="Enter a task ..." 
                value={newTask} onChange={handleInputChange}/>
          
          <button className="btn-add" onClick={addTask}>ADD TASK</button>
          
          </div>

          <ol className="list-order">
            {tasks.map((task,index) => 
                                      <li key={index}>
                                      <span className="task-text">
                                      {task}
                                      </span>

                                      <button 
                                      className="btn-delete"
                                      onClick={() => removeTask(index)}>
                                      Delete
                                      </button>

                                      <button 
                                      className="btn-up"
                                      onClick={() => moveTaskUp(index)}>
                                      
                                      ⬆️</button>
                                      <button className="btn-down"
                                      onClick={() => moveTaskDown(index)}>
                                      ⬇️</button>

                                      </li>)}
          </ol>
          


      </div>
    </div>

    </>

  )
}

export default ToDoList