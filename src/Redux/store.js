import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {GithubReducer} from "./reducer"
import {rootSaga} from "../ReduxSaga/RoootSaga"
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    GithubReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore
    (
        rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)) // Pass the composed enhancer to createStore
    );

sagaMiddleware.run(rootSaga)

export default store;



