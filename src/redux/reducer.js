import { combineReducers } from 'redux';
import Auth from './auth/reducer'
import Login from './login/reducer'
import AppReducer from '../redux/app/reducer'
import Register from './register/reducer'
import Articles from './articles/reducer'
import ConfirmReducer from './confirm/reducer'

export default combineReducers({
    Auth,
    Login,
    AppReducer,
    Register,
    Articles,
    ConfirmReducer
});