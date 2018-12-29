import TaskList from './../components/TaskList';
import { onRemoveTask, onStatusChange } from './../actions/TaskListActions';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    tasks: store.TaskListReducer.tasks,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemoveTask: taskID => {
      dispatch(onRemoveTask(taskID));
    },
    onStatusChange: (task, taskID) => {
      dispatch(onStatusChange(task, taskID));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
