import Auth from '../../helpers/auth'
import appActions from '../auth/actions'

let { checkAuth } = appActions

let actions = {
    CHANGE_FORM_VALUE_LOGIN: 'CHANGE_FORM_VALUE_LOGIN',
    changeInputLogin : (e)=>{
        return dispatch=>{
            dispatch({type: actions.CHANGE_FORM_VALUE_LOGIN , data: e.target})
        }
    },
    loginUser: (mobileNumber) => {
        return dispatch => {
            let auth = Auth.setAuth(mobileNumber)
            dispatch(checkAuth(auth))
        }
    }
}

export default actions