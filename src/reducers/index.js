import {combineReducers} from 'redux';
import session from './sessionReducer';
import task from './taskReducer';

const rootReducer = combineReducers({
    session,
    task
})

export default rootReducer;