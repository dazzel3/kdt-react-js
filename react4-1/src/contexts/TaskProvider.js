import { createContext, useContext } from 'react';
import { v4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContent = createContext();

export const useTasks = () => useContext(TaskContent);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (content) => {
    setTasks([...tasks, { id: v4(), content, complete: false }]);
  };

  const updateTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
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
