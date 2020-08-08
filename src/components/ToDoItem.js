import React from 'react';

function ToDoItem(props) {

  function completeTask(e) {
    e.preventDefault();
  }

  return (
    <li className="to-do-item">
      {props.title}
      <button class="btn-completed" onClick={completeTask}>Completed</button>
    </li>
  );
}

export default ToDoItem;