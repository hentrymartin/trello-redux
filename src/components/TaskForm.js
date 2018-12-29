import React from 'react';
import Input from './Input';
import Button from './Button';

const TaskForm = props => {
  return (
    <div className="task-form-wrapper">
      <Input placeholder="Task name" value={props.taskName} onChange={props.onTaskNameChange} />
      <Button label="RESET ME" theme="orange" onClick={props.onResetTaskName} />
      <Button label="ADD ME" theme="green" onClick={props.onAddTask.bind(this, props.taskName)} />
      <Button label="REMOVE ALL" theme="red" onClick={props.onResetAllTasks} />
    </div>
  );
};

export default TaskForm;
