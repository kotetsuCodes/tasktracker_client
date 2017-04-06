import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';

export function loginSuccess() {
    return {type: types.LOG_IN_SUCCESS}
}

export function logInUser(credentials) {
    return function(dispatch) {
        return sessionApi.login(credentials).then(response => {
            console.log(response.auth_token);
            sessionStorage.setItem('jwt', response.auth_token);
            dispatch(loginSuccess());
        }).catch(error => {
            throw(error);
        });
    };
}