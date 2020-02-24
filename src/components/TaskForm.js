import React, { useContext, useState, useEffect } from 'react';
import { TasksContext } from './../context/TaskListContext';
import uniqid from 'uniqid';

const TaskForm = () => {
  const [tasks, setTasks, editItem] = useContext(TasksContext);

  const [input, setInput] = useState('');

  const submit = event => {
    event.preventDefault();
    setTasks([...tasks, { task: input, id: uniqid() }]);
    setInput('');
  };

  const clearList = event => {
    event.preventDefault();
    setTasks([]);
  };

  return (
    <form className='form' onSubmit={submit}>
      <input
        type='text'
        className='task-input'
        placeholder={'New Task'}
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        required
      />
      <div className='buttons'>
        <button type='submit' className='add-task-btn btn'>
          Add Task
        </button>
        <button className='clear-btn btn' onClick={clearList}>
          Clear list
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
