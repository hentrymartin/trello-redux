import { ON_TASK_NAME_CHANGE, ON_RESET_TASK_NAME } from './../actions/TaskFormActions';
import { ON_ADD_TASK, ON_RESET_ALL_TASKS } from './../actions/TaskListActions';

const defaultState = {
  taskName: '',
  isError: false,
};

const TaskFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ON_TASK_NAME_CHANGE:
      return {
        ...state,
        taskName: action.taskName,
      };
    case ON_RESET_TASK_NAME:
    case ON_ADD_TASK:
    case ON_RESET_ALL_TASKS:
      return Object.assign({}, state, {
        taskName: '',
      });
    default:
      return state;
  }
};

export default TaskFormReducer;
