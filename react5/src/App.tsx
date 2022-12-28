import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Container>
      <Header>ToDo</Header>
      <NewTaskForm />
      <TaskList style={{ marginTop: 16 }} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
