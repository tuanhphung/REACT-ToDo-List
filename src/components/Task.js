import React, { useContext } from 'react';
import { TasksContext } from '../context/TaskListContext';

//destructure taskobj from TaskList.
const Task = ({ taskobj }) => {
  const [tasks, setTasks, findTask] = useContext(TasksContext);

  const deleteTask = event => {
    setTasks(tasks.filter(el => el.id !== taskobj.id));
    console.log(`delete clicked for id : ${taskobj.id}`);
  };

  return (
    <li className='list-item'>
      <span>{taskobj.task}</span>
      <div>
        <button className='btn-delete task-btn' onClick={deleteTask}>
          <i className='fas fa-trash-alt'></i>
        </button>
        {/* <button
          className='btn-edit task-btn'
          onClick={() => findTask(taskobj.id)}
        >
          <i className='fas fa-pen-alt'></i>
        </button> */}
      </div>
    </li>
  );
};

export default Task;
