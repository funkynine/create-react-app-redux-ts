import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from 'redux-thunk';
// Reducers
import userReducer from './user-service/reducer';

const rootReducer = combineReducers({
    // Add other reducers
    userRedux: userReducer,
});

// Configure redux
const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;