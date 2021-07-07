const INITIAL_LOGIN_STATE = {
    email: '',
    password: '',
};

const loginReducers = (state = INITIAL_LOGIN_STATE, action) => {
    switch(action.type) {
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: action.email
            };
        case 'UPDATE_PASSWORD':
            return {
                ...state,
                password: action.password
            };
        default: return state;
    }
};

export default loginReducers;