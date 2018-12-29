import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import TaskFormReducer from './TaskFormReducer';
import TaskListReducer from './TaskListReducer';

export default combineReducers({
  AppReducer,
  TaskFormReducer,
  TaskListReducer,
});
