// import userActions from '../Actions/user.actions';
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

export default function reducer(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
}, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            };
        default:
            return state
    }
}

// function sendLoginRequest(email, password) {
//     if (email === 'admin@gmail.com' && password === 'admin') {
//         return true;
//     }
//     else {
//         return ('Invalid Username & password!');
//     }
// }