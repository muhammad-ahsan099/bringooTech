
import { LOGIN, LOGOUT , ACTIVE_USER} from "../type/Type";

let initialState = {
    error: '',
    isUserLoggedIn: false,
    users: []
}

function AuthReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isUserLoggedIn: true,
                // users: action.payload.data.Data
            };
        }

        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
                users: [],
            }
        case ACTIVE_USER:
            return {
                ...state,
                isUserLoggedIn: true,
                // users: [],
            }

        default:
            return state;
    }
}

export default AuthReducer;