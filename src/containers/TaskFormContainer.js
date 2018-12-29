import { connect } from 'react-redux';
import TaskForm from './../components/TaskForm';
import { onTaskNameChange, onResetTaskName } from './../actions/TaskFormActions';
import { onAddTask, onResetAllTasks } from './../actions/TaskListActions';

const mapStateToProps = store => {
  return {
    taskName: store.TaskFormReducer.taskName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTaskNameChange: taskName => {
      dispatch(onTaskNameChange(taskName));
    },
    onResetTaskName: () => {
      dispatch(onResetTaskName());
    },
    onAddTask: taskName => {
      dispatch(onAddTask(taskName));
    },
    onResetAllTasks: () => {
      dispatch(onResetAllTasks());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskForm);
