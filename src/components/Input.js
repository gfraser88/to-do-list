import React, {useState} from 'react';

function Input(props) {
  const [taskTitle, setTaskTitle] = useState("");

  function addTask(e) {
      e.preventDefault();
      console.log(taskTitle);
      props.createTask({title : taskTitle, itemOrder : props.totalTasks})
      setTaskTitle("");
      }


  return (
    <div className="input-section">
        <div>Add a new task:</div>
        <input className="txt-task" type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
        <button className="btn-add-task" onClick={addTask}>Add</button>
    </div>
  );
}

export default Input;