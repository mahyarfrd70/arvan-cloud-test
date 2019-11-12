import loginService from '../../services/login'
import authActions from '../auth/actions'
import appActions from '../app/actions'

let { setAuth } = authActions
let {setUserData} = appActions

let actions = {
    CHANGE_FORM_VALUE_LOGIN: 'CHANGE_FORM_VALUE_LOGIN',
    CHANGE_LOADING_LOGIN: 'CHANGE_LOADING_LOGIN',
    changeInputLogin : (e)=>{
        return dispatch=>{
            dispatch({type: actions.CHANGE_FORM_VALUE_LOGIN , data: e.target})
        }
    },
    loginUser: (userData) => {
        return async dispatch => {
            dispatch({type: actions.CHANGE_LOADING_LOGIN , data: true})
            try{
                let response = await loginService.loginUser(
                    '/users/login' , 
                    {user: userData}
                )
                let {data: { user: {username , email , image , token}}} = response
                dispatch({type: actions.CHANGE_LOADING_LOGIN , data: false})
                dispatch(setUserData({username , email , image}))
                dispatch(setAuth(token))
                return response
            }catch(err){
                console.log(err)
                dispatch({type: actions.CHANGE_LOADING_LOGIN , data: false})
                throw err.response && err.response.data
            }
        }
    }
}

export default actions