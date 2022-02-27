export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: {
            userId: userId,
        }
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

export const trueAdmin = () => {
    return {
        type: 'CHANGE_ADMIN_TRUE'
    }
}

export const falseAdmin = () => {
    return {
        type: 'CHANGE_ADMIN_FALSE'
    }
}