import { combineReducers } from '@reduxjs/toolkit';
import TodosSlice from './TodosSlice';

const rootReducer = combineReducers({
  todos: TodosSlice
});

export default rootReducer;
