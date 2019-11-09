import { combineReducers } from 'redux';
import App from './app/reducer'
import Login from './login/reducer'

export default combineReducers({
    App,
    Login
});