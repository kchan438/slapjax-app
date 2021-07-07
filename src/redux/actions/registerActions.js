export const setFirstName = firstName => ({
    type: 'REGISTER_SET_FIRSTNAME',
    firstName
});

export const setLastName = lastName => ({
    type: 'REGISTER_SET_LASTNAME',
    lastName
});

export const setRegisterEmail = email => ({
    type: 'REGISTER_SET_EMAIL',
    email
});

// might exclude these for security reasons
// export const setRegisterPassword = password => ({
//     type: 'REGISTER_SET_PASSWORD',
//     password
// });

// export const setConfirmPassowrd = confirmPassword => ({
//     type: 'REGISTER_SET_COMFIRMPASSWORD',
//     confirmPassword
// });

export const setGender = gender => ({
    type: 'REGISTER_SET_GENDER',
    gender
});