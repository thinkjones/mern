import { push } from 'react-router-redux';
import { authService } from '../services';

import * as types from '../types';

function beginLogin() {
    return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message) {
    return {
        type: types.LOGIN_SUCCESS_USER,
        message
    };
}

function loginError(message) {
    return {
        type: types.LOGIN_ERROR_USER,
        message
    };
}

function signUpError(message) {
    return {
        type: types.SIGNUP_ERROR_USER,
        message
    };
}

function beginSignUp() {
    return { type: types.SIGNUP_USER };
}

function signUpSuccess(message) {
    return {
        type: types.SIGNUP_SUCCESS_USER,
        message
    };
}

function beginLogout() {
    return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
    return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
    return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
    return { type: types.TOGGLE_LOGIN_MODE };
}


export function manualLogin(data) {
    return (dispatch) => {
        dispatch(beginLogin());

        return authService().login(data)
            .then((response) => {
                dispatch(loginSuccess('You have been successfully logged in'));
                dispatch(push('/'));
            })
            .catch((err) => {
                dispatch(loginError('Oops! Invalid username or password'));
            });
    };
}


export function logout() {
    return (dispatch) => {
        dispatch(beginLogout());

        return authService().logout()
            .then((response) => {
                dispatch(logoutSuccess());
                dispatch(push('/auth/login'));
            })
            .catch((err) => {
                dispatch(logoutError());
            });
    };
}