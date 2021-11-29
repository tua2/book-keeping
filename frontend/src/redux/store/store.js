import{createStore,combineReducers,applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';
import { userProfileReducer } from '../reducers/users/userProfileReducer';
import updateUserProfile from '../reducers/users/updateUserProfile';
const middlewares=[thunk];

const reducer=combineReducers({
    bookCreated: createBookReducer,
    booksList: bookListReducer,
    userLogin: userReducer, //login/register
    userProfile: userProfileReducer,
    updatedUser: updateUserProfile,
});

//Get user from localstorage & save it into store
const userAuthFromStorage=localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')): null;

const initialState={
    userLogin: {userInfo: userAuthFromStorage},
};
//console.log(userAuthFromStorage);
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export {store}; 