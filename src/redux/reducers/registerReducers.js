const INITIAL_REGISTER_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
};

const registerReducer = (state = INITIAL_REGISTER_STATE, action) => {
    switch(action.type) {
        case 'UPDATE_FIRSTNAME':
            return {
                ...state,
                firstName: action.firstName
            };
        case 'UPDATE_LASTNAME':
            return {
                ...state,
                lastName: action.lastName
            };
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
        case 'UPDATE_CONFIRMPASSWORD':
            return {
                ...state,
                confirmPassword: action.confirmPassword
            };
        case 'UPDATE_GENDER':
            return {
                ...state,
                gender: action.gender
            };
            default:
                return state;
    }
};

export default registerReducer;