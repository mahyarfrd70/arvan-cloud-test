import registerService from '../../services/register'
import authActions from '../../redux/auth/actions'
import appActions from '../app/actions'

let {setAuth} = authActions
let {setUserData} = appActions

let actions = {
    CHANGE_LOADING_REGISTER: 'CHANGE_LOADING_REGISTER',
    CHANGE_FORM_VALUE_REGISTER: 'CHANGE_FORM_VALUE_REGISTER',
    changeInputRegister : (e)=>{
        return dispatch=>{
            dispatch({type: actions.CHANGE_FORM_VALUE_REGISTER , data: e.target})
        }
    },
    registerUser: (userData) => {
        return async dispatch => {
            dispatch({type: actions.CHANGE_LOADING_REGISTER , data: true})
            try{
                let response = await registerService.registerUser(
                    '/users' , 
                    {user: userData}
                )
                let {data: {user: {username , email, image, token}}} = response
                dispatch({type: actions.CHANGE_LOADING_REGISTER , data: false})
                dispatch(setUserData({username, email, image}))
                dispatch(setAuth(token))
                return response
            }catch(err){
                dispatch({type: actions.CHANGE_LOADING_REGISTER , data: false})
                throw err.response.data
            }
        }
    }
}

export default actions