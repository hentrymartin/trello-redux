import React from 'react';
import PropTypes from 'prop-types';
import EachColumn from './EachColumn';
import './TaskList.css';

const TaskList = props => {
  return (
    <div className="task-list-wrapper">
      <div className="task-list-wrapper__todo-items">
        <EachColumn
          tasks={props.tasks}
          statusToBeDisplayed="TODO"
          onRemoveTask={props.onRemoveTask}
          onStatusChange={props.onStatusChange}
        />
      </div>
      <div className="task-list-wrapper__progress-items">
        <EachColumn
          tasks={props.tasks}
          statusToBeDisplayed="IN_PROGRESS"
          onRemoveTask={props.onRemoveTask}
          onStatusChange={props.onStatusChange}
        />
      </div>
      <div className="task-list-wrapper__completed-items">
        <EachColumn
          tasks={props.tasks}
          statusToBeDisplayed="COMPLETED"
          onRemoveTask={props.onRemoveTask}
          onStatusChange={props.onStatusChange}
        />
      </div>
    </div>
  );
};

TaskList.defaultProps = {
  tasks: [],
  onRemoveTask: () => {},
  onStatusChange: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
