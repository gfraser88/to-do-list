import React, {useState} from 'react';

function ToDoItem(props) {
  const [editMode, setEditMode] = useState(false);
  const [titleEdit, setTitleEdit] = useState(props.title);
  const [errorMessage, setErrorMessage] = useState("");

  function completeClick() {
    props.completeTask(props.taskId); //send selected task id
  }

  function editModeToggle() {
    setEditMode(true);
  }

  function saveEditClick() {
    if(titleEdit.trim() === "") {
      setErrorMessage("Task title cannot be blank.");
    }
    else {
      props.saveEdit({id: props.taskId, title: titleEdit}); //send edited task object
      //reset controls
      setErrorMessage("");
      setEditMode(false);
    }
  }

  return (
    <li className="to-do-item">
      {editMode ? 
      <div className="task-container">
        <input type="text" className="txt-edit" value={titleEdit} onChange={e => setTitleEdit(e.target.value)}></input>
        <button className="btn btn-save" onClick={saveEditClick}>Save</button>
        <div className="error-message">{errorMessage}</div>
      </div> 
      : 
      <div className="task-container">
        {props.title}
        <button className="btn btn-completed" onClick={completeClick}>Done!</button>
        <button className="btn btn-edit" onClick={editModeToggle}>Edit</button>
      </div>
      }
    </li>
  );
}

export default ToDoItem;