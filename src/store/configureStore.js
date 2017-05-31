import { createStore, applyMiddleware, compose } from 'redux';
import {routerMiddleware} from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// See for example - https://github.com/reactGo/reactGo/blob/master/app/store/configureStore.js
export default function configureStore(initialState, history) {
    const middleware = [thunk, routerMiddleware(history)];
    let store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));
    return store;
}
