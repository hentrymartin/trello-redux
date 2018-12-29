import React from 'react';
import TaskFormContainer from './../containers/TaskFormContainer';
import TaskListContainer from './../containers/TaskListContainer';

const App = props => {
  return (
    <div>
      <TaskFormContainer />
      <TaskListContainer />
    </div>
  );
};

export default App;
