import React, {useState} from 'react';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';
import CompletedItem from './components/CompletedItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksNum, setTasksNum] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <div className="App">
      <header className="title">
        <h1>To-Do List</h1>
      </header>
      <div>
        <Input totalTasks={tasksNum} createTask={task => setTasks([...tasks, task])}/>
      </div>
      <div className="row">
        <div className="tasks-column">
          <h2>Tasks</h2>
          <div className="tasks-content">
            <ul class="tasks-list">
            {tasks.map((task, i) => <ToDoItem title={task.title} key={i} /> )}
            </ul>
          </div>
        </div>
        <div className="completed-column">
          <h2>Completed</h2>
          <div className="completed-content">
            <ul class="completed-tasks-list">
              {completedTasks.map((task, i) => <ToDoItem title={task.title} key={i} /> )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
