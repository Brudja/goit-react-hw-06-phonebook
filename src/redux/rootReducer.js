import { combineReducers } from 'redux';
import phonebookReducer from "./PhoneBookRedux/phonebookSlice";
import filterReducer from './PhoneBookRedux/FilterSlice';

export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
});
