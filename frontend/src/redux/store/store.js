import{createStore,combineReducers,applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';
const middlewares=[thunk];

const reducer=combineReducers({
    bookCreated: createBookReducer,
    booksList: bookListReducer,
    userLogin: userReducer,
});

//Get user from localstorage & save it into store
const userAuthFromStorage=localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')): null;

const initialState={
    userLogin: {userInfo: userAuthFromStorage},
};
//console.log(userAuthFromStorage);
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export {store}; 