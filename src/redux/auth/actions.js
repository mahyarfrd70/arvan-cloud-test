let actions ={
    CHANGE_LOADING_AUTH:'CHANGE_LOADING_AUTH',
    IS_LOGGED_IN_AUTH: 'IS_LOGGED_IN_AUTH',
    checkAuth : (authStatus)=>{
        return dispatch => {
            dispatch({type: actions.IS_LOGGED_IN_AUTH , data: authStatus})
            dispatch({type: actions.CHANGE_LOADING_AUTH , data: false})
        }
    }
}

export default actions