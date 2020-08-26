import { SIGNUP, SIGNIN, SIGNOUT } from '../constants/authConstants';

const initialState = {
    email: "",
    token: "",
    databaseId: ""
}

export default (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case SIGNUP:
            return {
                email: payload.email,
                token: payload.token,
                databaseId: payload.databaseId
            };
        case SIGNIN:
            return {
                email: payload.email,
                token: payload.token,
                databaseId: payload.databaseId
            };
        case SIGNOUT:
            return {
                email: "",
                token: "",
                databaseId: ""
            };
        default:
            return state
    }
};