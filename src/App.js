import React from 'react';
import Header from './components/Header.js';
import AddTask from './components/AddTask.js';
import RemainingTasks from './components/RemainingTasks';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="container">
    <Header />
    <AddTask />
    <RemainingTasks />
    <TaskList />
    </div>
  );
}

export default App;
