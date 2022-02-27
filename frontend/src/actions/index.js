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