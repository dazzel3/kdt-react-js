import React from 'react';
import styled from '@emotion/styled';
import TaskProvider from './contexts/TaskProvider';
import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskProvider>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList style={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
};

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
