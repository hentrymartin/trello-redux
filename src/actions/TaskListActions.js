export const ON_ADD_TASK = 'ON_ADD_TASK';
export const ON_RESET_ALL_TASKS = 'ON_RESET_ALL_TASKS';
export const ON_REMOVE_TASK = 'ON_REMOVE_TASK';
export const ON_STATUS_CHANGE = 'ON_STATUS_CHANGE';

export function onAddTask(taskName) {
  return {
    type: ON_ADD_TASK,
    taskName,
  };
}

export function onResetAllTasks() {
  return {
    type: ON_RESET_ALL_TASKS,
  };
}

export function onRemoveTask(taskID) {
  return {
    type: ON_REMOVE_TASK,
    taskID,
  };
}

export function onStatusChange(task, taskID) {
  return {
    type: ON_STATUS_CHANGE,
    task,
    taskID,
  };
}
