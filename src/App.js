import React, {useState} from 'react';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';
import CompletedItem from './components/CompletedItem';

function App() {
  const [tasks, setTasks] = useState([]); //task array
  const [taskIdCount, setTaskIdCount] = useState(0); 
  const [completedTasks, setCompletedTasks] = useState([]); //completed task array

  //function to swap array order by index
  function moveArray(array, old_index, new_index) {
    if (new_index >= array.length) {
        var k = new_index - array.length + 1;
        while (k--) {
            array.push(undefined);
        }
    }
    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    return array;
};

  function addTask(task) {
    setTasks([...tasks, task]); //Add Task to array of tasks
    setTaskIdCount(taskIdCount + 1); //Increase id for next item
  }

  function completeTask(taskId) {
    var completedTask = tasks.filter(item => item.id === taskId)[0]; //find task by id
    setTasks(tasks.filter(item => item.id !== taskId)); //remove task from array
    setCompletedTasks([...completedTasks, completedTask]); //update array
  }

  function uncompleteTask(taskId) {
    var uncompletedTask = completedTasks.filter(item => item.id === taskId)[0]; //find completed task by id
    setCompletedTasks(completedTasks.filter(item => item.id !== taskId)); //remove task from completed array
    setTasks([...tasks, uncompletedTask]); //update array
  }

  function updateTask(task) {
    const newTasks = tasks.slice(); //copy array
    newTasks.filter(item => item.id === task.id)[0].title = task.title; //find task by id and change title
    setTasks(newTasks); //update array to copied array
  }

  function moveUp(index) {
    const newTasks = tasks.slice(); //copy array
    moveArray(newTasks, index, index-1); //swap with item before it
    setTasks(newTasks);
  }

  function moveDown(index) {
    const newTasks = tasks.slice(); //copy array
    moveArray(newTasks, index, index+1); //swap with item after it
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <header className="title">
        <h1>To-Do List</h1>
      </header>
      <div>
        <Input taskId={taskIdCount} createTask={addTask}/>
      </div>
      <div className="row">
        <div className="tasks-column">
          <h2>Tasks</h2>
          <div className="tasks-content">
            <ul className="tasks-list">
            {tasks.map((task, i) => <ToDoItem title={task.title} totalTasks={tasks.length} taskId={task.id} index={i} key={i} 
                                      completeTask={completeTask} saveEdit={updateTask} moveUp={moveUp} moveDown={moveDown} /> )}
            </ul>
          </div>
        </div>
        <div className="completed-column">
          <h2>Completed</h2>
          <div className="completed-content">
            <ul className="completed-tasks-list">
              {completedTasks.map((task, i) => <CompletedItem title={task.title} taskId={task.id} key={i} uncompleteTask={uncompleteTask} /> )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
