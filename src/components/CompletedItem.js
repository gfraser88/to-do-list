import React from 'react';

function CompletedItem(props) {
    
    function notCompleteClick() {
        props.uncompleteTask(props.taskId); //send selected task id
    }
  
    return (
        <li className="completed-item">
            <div className="task-container">
                <span className="completed-title">{props.title}</span>
                <button className="btn btn-uncompleted" onClick={notCompleteClick}>Not done yet!</button>
            </div>
        </li>
  );
}

export default CompletedItem;