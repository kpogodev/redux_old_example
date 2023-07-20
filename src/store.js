import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Import Reducers
import { usersReducer } from './reducer/usersReducer';
import { postsReducer } from './reducer/postsReducer';

// Initial State
const initialState = {};

// Root Reducer - combine all reducers here
const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,

});

// Create store with rootReducer and initialState and apply thunk middleware for async actions
export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));