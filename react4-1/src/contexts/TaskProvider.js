import { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';

const TaskContent = createContext();

export const useTasks = () => useContext(TaskContent);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (content) => {
    setTasks([...tasks, { id: v4(), content, complete: false }]);
  };

  const updateTask = (id, status) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <TaskContent.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContent.Provider>
  );
};

export default TaskProvider;
