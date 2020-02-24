import React, { useState } from 'react';

export const TasksContext = React.createContext();

const TaskListContext = props => {
  const [tasks, setTasks] = useState([
    { task: 'Go to gym', id: 1 },
    { task: 'Study at cafe', id: 2 },
    { task: 'Visit museum', id: 3 }
  ]);

  const [editItem, seteditItem] = useState(null);

  const editTask = (name, id) => {
    const newList = tasks.map(el => (el.id === id ? { name, id } : el));

    setTasks(newList);
  };

  const findTask = id => {
    const task = tasks.find(item => item.id === id);
    console.log(task);
    seteditItem(task);
  };

  return (
    <TasksContext.Provider
      value={[tasks, setTasks, findTask, editItem, editTask]}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TaskListContext;
