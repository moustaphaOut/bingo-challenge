import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/combineReducers';
//thunk => midel de redux pour reagir avec l'exterieur
import thunk from "redux-thunk"

// for this we'll use Redux "compose" function
const enhancers = compose(
    applyMiddleware(thunk), // your own middleware
    window.devToolsExtension ? window._REDUX_DEVTOOLS_EXTENSION_() : (f) => f
);// devtools middleware

export let store = createStore(rootReducer, enhancers);