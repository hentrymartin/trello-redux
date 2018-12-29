import { ON_ADD_TASK, ON_RESET_ALL_TASKS, ON_REMOVE_TASK, ON_STATUS_CHANGE } from './../actions/TaskListActions';

const defaultState = {
  tasks: [],
};

const TaskListReducer = function(state = defaultState, actions) {
  switch (actions.type) {
    case ON_ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: actions.taskName,
            status: 'TODO',
          },
        ],
      };
    case ON_RESET_ALL_TASKS:
      return {
        ...state,
        tasks: [],
      };
    case ON_REMOVE_TASK:
      const copy = [...state.tasks];
      copy.splice(actions.taskID, 1);
      return {
        ...state,
        tasks: copy,
      };
    case ON_STATUS_CHANGE:
      const { task } = actions;
      const copiedTask = { ...task };
      if (copiedTask.status === 'TODO') {
        copiedTask.status = 'IN_PROGRESS';
      } else {
        copiedTask.status = 'COMPLETED';
      }

      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index === actions.taskID) {
            return copiedTask;
          }

          return task;
        }),
      };
    default:
      return state;
  }
};

export default TaskListReducer;
