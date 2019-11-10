import { combineReducers } from 'redux';
import Auth from './auth/reducer'
import Login from './login/reducer'
import AppReducer from '../redux/app/reducer'

export default combineReducers({
    Auth,
    Login,
    AppReducer
});