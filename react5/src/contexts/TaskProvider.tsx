import { createContext, ReactChild, useContext } from 'react';
import { v4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

interface Task {
  id: string;
  content: string;
  complete: boolean;
}

interface ITaskContext {
  tasks: Task[];
  addTask(content: string): void;
  updateTask(id: string): void;
  removeTask(id: string): void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const useTasks = () => useContext(TaskContext);

interface Props {
  children: ReactChild;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (content: string) => {
    setTasks([...tasks, { id: v4(), content, complete: false }]);
  };

  const updateTask = (id: string) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
