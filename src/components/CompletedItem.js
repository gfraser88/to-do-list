import React from 'react';

function CompletedItem(props) {
    
    function notCompleteClick() {
        props.uncompleteTask(props.taskId); //send selected task id
    }
  
    return (
        <li className="completed-item">
        {props.title}
        <button className="btn btn-uncompleted" onClick={notCompleteClick}>Not done yet!</button>
        </li>
  );
}

export default CompletedItem;