import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskListContext from './context/TaskListContext';
import TaskForm from './components/TaskForm';
import Heading from './components/Heading';

function App() {
  return (
    <TaskListContext>
      <div className='container'>
        <div className='app-wrapper'>
          <Heading />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskListContext>
  );
}

export default App;
