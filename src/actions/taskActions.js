import * as types from './actionTypes';
import taskApi from '../api/TaskApi';

export function taskGetSuccess(tasks) {
    return {type: types.TASKS_GET_SUCCESS, tasks}
}

export function getTasks() {
    return function(dispatch) {
        return taskApi.getTasks().then(tasks => {
            dispatch(taskGetSuccess(tasks));
        }).catch(error => {
            throw(error);
        });
    };
}