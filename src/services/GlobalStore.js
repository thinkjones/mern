import { combineReducers, createStore } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import auth from '../reducers/auth';

const rootReducer = combineReducers({
    auth,
    routing
})


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let globalStore = createStore(rootReducer)

export default globalStore
