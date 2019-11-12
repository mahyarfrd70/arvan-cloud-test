import Api from '../../helpers/api'

let actions={
    SET_USER_DATA_APP:'SET_USER_DATA_APP',
    CHANGE_LOADING_APP: 'CHANGE_LOADING_APP',
    setUserData: (userData) => {
        return dispatch => {
            dispatch({type: actions.SET_USER_DATA_APP , data: userData})
        }
    }
}

export default actions