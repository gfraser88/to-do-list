import React, {useState} from 'react';

function Input(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

 
  
  function addTask(e) {    
      if(taskTitle.trim() !== "") {
        props.createTask({title : taskTitle, id : props.taskId}); //create a new task object
        setErrorMessage("");
      } 
      else
      {
        setErrorMessage("The task title cannot be blank."); 
      } 
      
      setTaskTitle(""); //reset text field
  }


  return (
    <div className="input-section">
        <div>Add a new task:</div>
        <input className="txt-task" type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
        <button className="btn-add-task" onClick={addTask}>Add</button>
        <div className="error-message">{errorMessage}</div>
    </div>
  );
}

export default Input;