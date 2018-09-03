export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const userActions = {
    setLoginPending,
    setLoginSuccess,
    loginError
}

export function setLoginPending(isLoginPending) {
    return {
        type:LOGIN_PENDING,
        isLoginPending
    };
}

export function setLoginSuccess(isLoginSuccess) {
    return {
        type:LOGIN_SUCCESS,
        isLoginSuccess
    };
}

export function loginError(loginError) {
    return {
        type:LOGIN_ERROR,
        loginError
    };
}

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(loginError(null));
    }
}