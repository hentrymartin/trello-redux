export const ON_TASK_NAME_CHANGE = 'ON_TASK_NAME_CHANGE';
export const ON_RESET_TASK_NAME = 'ON_RESET_TASK_NAME';

export function onTaskNameChange(taskName) {
  console.log(taskName, 'in actions');
  return {
    type: ON_TASK_NAME_CHANGE,
    taskName,
  };
}

export function onResetTaskName() {
  return {
    type: ON_RESET_TASK_NAME,
  };
}
