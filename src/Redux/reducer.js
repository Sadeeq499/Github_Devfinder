// action types
import Constant from "./constant"


// Initial State
const initialState = {
    user: [],
};

// github reducer
export const GithubReducer = (state = initialState, action) => {

    switch (action.type) {
        case Constant.GET_GITHUB_USER_SUCCESS:
            return {
                ...state,
                user: action.users
            }
        default:
            return state;
    }

}