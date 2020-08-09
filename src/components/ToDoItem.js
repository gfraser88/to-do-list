import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'

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

  function moveUpClick() {
    props.moveUp(props.index);
  }

  function moveDownClick() {
    props.moveDown(props.index);
  }

  return (
    <li className="to-do-item">
      {editMode ? 
      <div className="task-container">
        <div>
        <input type="text" className="txt-edit" value={titleEdit} onChange={e => setTitleEdit(e.target.value)}></input>
        <button className="btn btn-save" onClick={saveEditClick}>Save</button>
        </div>
        <div className="error-message">{errorMessage}</div>
      </div> 
      : 
      <div className="task-container">
          <span className="task-title">{props.title}</span>
          <div className="options">
            <button className="btn btn-completed" onClick={completeClick}>Done!</button>
            <button className="btn btn-edit" onClick={editModeToggle}>Edit</button>
            <button className={props.totalTasks > 1 && props.index > 0 ? "btn btn-up" : "btn btn-up hidden" } onClick={moveUpClick}><FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" /></button>
            <button className={props.totalTasks > 1 && props.index  < (props.totalTasks - 1) ? "btn btn-down" : "btn btn-down hidden"} onClick={moveDownClick}><FontAwesomeIcon icon={faArrowAltCircleDown} size="lg" /></button>
            {/* {props.totalTasks > 1 && props.index > 0 ? <button className="btn btn-up hidden" onClick={moveUpClick}><FontAwesomeIcon icon={faArrowAltCircleUp} size="1x" /></button> : ""}
            {props.totalTasks > 1 && props.index  < (props.totalTasks - 1) ? <button className="btn btn-down hidden" onClick={moveDownClick}><FontAwesomeIcon icon={faArrowAltCircleDown} size="1x" /></button> : ""} */}
          </div>
      </div>
      }
    </li>
  );
}

export default ToDoItem;