import { combineReducers } from 'redux';
import Auth from './auth/reducer'
import Login from './login/reducer'
import AppReducer from '../redux/app/reducer'
import Register from './register/reducer'

export default combineReducers({
    Auth,
    Login,
    AppReducer,
    Register
});