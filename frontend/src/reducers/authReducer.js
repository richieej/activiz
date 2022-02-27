const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    admin: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload.userId }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null}
        case 'CHANGE_ADMIN_FALSE':
            return { ...state, admin: false}
            case 'CHANGE_ADMIN_TRUE':
                return { ...state, admin: true}
        default:
            return state
    }
}