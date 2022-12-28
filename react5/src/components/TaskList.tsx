import styled from '@emotion/styled';
import Task from './Task';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

const TaskList = (props: any) => {
  const tasks = useSelector((store: RootState) => store.tasks);

  return (
    <UnorderedList {...props}>
      {tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          content={item.content}
          complete={item.complete}
        />
      ))}
    </UnorderedList>
  );
};

export default TaskList;

const UnorderedList = styled.div`
  width: 400px;
  margin: 0;
  padding: 0;
  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;
