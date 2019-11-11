import Auth from '../../helpers/auth'
import appActions from '../auth/actions'

let { checkAuth } = appActions

let actions = {
    CHANGE_FORM_VALUE_REGISTER: 'CHANGE_FORM_VALUE_REGISTER',
    changeInputRegister : (e)=>{
        return dispatch=>{
            dispatch({type: actions.CHANGE_FORM_VALUE_REGISTER , data: e.target})
        }
    },
    registerUser: (userData) => {
        return dispatch => {
            // let auth = Auth.setAuth(mobileNumber)
            // dispatch(checkAuth(auth))
        }
    }
}

export default actions