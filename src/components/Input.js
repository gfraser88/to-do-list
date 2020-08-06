import React from 'react';

function Input() {

function addTask(e) {
    e.preventDefault();
    }

  return (
    <div className="input-section">
        <div>Add a new task:</div>
        <input className="txt-task" type="text" />
        <button className="btn-add-task" onClick={addTask}>Add</button>
    </div>
  );
}

export default Input;