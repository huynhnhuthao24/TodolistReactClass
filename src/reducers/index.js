import { combineReducers } from 'redux';
import tasksReducers from './tasks';
import displayFrom from './displayFrom'
import  editTask  from './editTask';
import  filterTask  from './filterTask';
import searchTern from "./searchTern"
const  rootReducers = combineReducers({
    tasks: tasksReducers,
    displayFrom : displayFrom,
    editTask : editTask,
    filterTask : filterTask,
    searchTern : searchTern
});

export default rootReducers;