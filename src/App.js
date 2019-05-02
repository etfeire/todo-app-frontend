import React from 'react';
import uuid from "uuid/v4";
import Header from './components/Header.js';
import AddTask from './components/AddTask.js';
import RemainingTasks from './components/RemainingTasks';
import TaskItem from './components/TaskItem';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      {task: "Attend TechReturners course", completed: true, id: uuid()}, 
      {task: "Practise!", completed: false, id: uuid()}, 
      {task:"Do your homework", completed:false, id: uuid()}, 
      {task:"Build final project", completed: true, id: uuid()}, 
      {task:"Drink coffee", completed: false, id: uuid()},
      {task: "Apply to tech companies", completed: false, id: uuid()}
  ],
  };

  deleteTask = (id) => {
    const deletedTasks = this.state.tasks.filter(item => {
      return (item.id !== id);
    });
    console.log(id);
    console.log(deletedTasks);
    this.setState({
      tasks: deletedTasks
    });
  }

  addTask = (newTask) => {
    const newTasks = this.state.tasks.slice();
    const taskObject = {task: newTask, completed: false, id: uuid()};
    newTasks.push(taskObject);
    // Always use setState to update any part of the state which needs to change
    this.setState({
      tasks: newTasks
    });
  };

  render() {
  return (
    <div className="container">
    <div className="row">
      <Header />
    </div>
    <div className="row">
      <AddTask addTask={this.addTask} />
    </div>
    <div className="row">
      <RemainingTasks count={this.state.tasks.length} />
    </div>
    {/* <div className="row">
    <TaskList tasks={this.state.tasks}/>
    </div> */}
    <div className="container">
      {this.state.tasks.map((item, i) => {
          return (
          <TaskItem
          deleteTask={this.deleteTask}
          key={i} 
          id={item.id}
          taskText={item.task}
          completed={item.completed} 
          />
        );
      })}
    </div>
    </div>
  )};
}

export default App;
