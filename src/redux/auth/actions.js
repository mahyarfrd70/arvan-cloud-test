import auth from '../../helpers/auth'

let actions ={
    CHANGE_LOADING_AUTH:'CHANGE_LOADING_AUTH',
    SET_TOKEN_AUTH: 'SET_TOKEN_AUTH',
    setAuth : (token)=>{
        return dispatch => {
            if(token){
                auth.setAuth(token)
            }
            dispatch({type: actions.SET_TOKEN_AUTH , data: token})
            dispatch({type: actions.CHANGE_LOADING_AUTH , data: false})
        }
    }
}

export default actions