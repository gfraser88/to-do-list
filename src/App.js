import React from 'react';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="title">
        <h1>To-Do List</h1>
      </header>
      <div>
        <Input/>
      </div>
      <div className="row">
        <div className="tasks-column">
          <h2>Tasks</h2>
          <div className="tasks-content">

          </div>
        </div>
        <div className="completed-column">
          <h2>Completed</h2>
          <div className="completed-content">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
