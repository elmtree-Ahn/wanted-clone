import { combineReducers } from "redux";
import HomeReducer from './home';
import LoginReducer from './login';
import auth from './auth';
import modal from "../modules/signup";
import login from "../modules/login";

const RootReducer = combineReducers({
    HomeReducer,
    LoginReducer,
    auth,
    modal,
    login,

})

export default RootReducer