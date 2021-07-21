export const setLoginEmail = email => ({
    type: 'LOGIN_SET_EMAIL',
    email,
});

export const setLoginPassword = password => ({
    type: 'LOGIN_SET_PASSWORD',
    password,
});

export const setIsLoggedIn = isLoggedIn => ({
    type: 'USER_SET_IS_LOGGED_IN',
    isLoggedIn,
});