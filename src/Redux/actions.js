import ActionType from "./constant"

export const fetchedData = (username) => {
    return {
        type: ActionType.GET_GITHUB_USER_REQUEST,
        payload: username  
    }
}