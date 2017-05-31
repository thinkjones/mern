import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from '../reducers/auth';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    auth,
    routing
});

export default rootReducer;
