let actions = {
    CHANGE_MOBILE_NUMBER_LOGIN: 'CHANGE_MOBILE_NUMBER_LOGIN',
    changeInputLogin : (e)=>{
        return dispatch=>{
            dispatch({type: actions.CHANGE_MOBILE_NUMBER_LOGIN , data: e.target})
        }
    }
}

export default actions