import {call,put,takeLatest} from 'redux-saga/effects'
import ActionType from "../Redux/constant"
import ApiCall from "./APIs"

// worker saga
 function* fetchGithubUsers(action){
    try{
        const users = yield call(ApiCall,action)
        yield put({type:ActionType.GET_GITHUB_USER_SUCCESS,users})
    }catch(e){
        console.log(e.message)
    }
}
// watcher saga
export const rootSaga = function* GithubSaga(){
    yield takeLatest(ActionType.GET_GITHUB_USER_REQUEST,fetchGithubUsers)
}







