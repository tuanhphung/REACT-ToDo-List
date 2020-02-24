import React, { useContext } from 'react';
import { TasksContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
  const [tasks] = useContext(TasksContext);

  return (
    <div className='list'>
      <ul>
        {tasks.map(task => (
          <Task taskobj={task} key={task.id} /> //pass obj to Task component to destructure to variable. Do not need to use props.
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
