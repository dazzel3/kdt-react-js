import Task from '../components/Task';

export default {
  title: 'Component/Task',
  component: Task,
};

export const Default = () => {
  const task = {
    content: '출근하기',
    complete: false,
  };
  return <Task id='123' content={task.content} complete={task.complete} />;
};
