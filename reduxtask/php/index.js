import registerReducer from "./register";
import {combineReducers} from 'redux';
import loginReducer from "./login"


const AllReducers=combineReducers({
    register:registerReducer,
    // login: loginReducer
});

export default AllReducers;