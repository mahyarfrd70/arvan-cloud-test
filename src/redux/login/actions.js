import Auth from '../../helpers/auth'
import appActions from '../auth/actions'

let { checkAuth } = appActions

let actions = {
    CHANGE_MOBILE_NUMBER_LOGIN: 'CHANGE_MOBILE_NUMBER_LOGIN',
    changeInputLogin : (e)=>{
        return dispatch=>{
            dispatch({type: actions.CHANGE_MOBILE_NUMBER_LOGIN , data: e.target})
        }
    },
    login: (mobileNumber) => {
        return dispatch => {
            let auth = Auth.setAuth(mobileNumber)
            dispatch(checkAuth(auth))
        }
    }
}

export default actions