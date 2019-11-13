import Api from '../../helpers/api'

let actions={
    CHANGE_LOADING_DELETE_ARTICLES : 'CHANGE_LOADING_DELETE_ARTICLES ',
    changeConfirmLoading: (data) => {
        return dispatch => {
            dispatch({type: actions.CHANGE_LOADING_DELETE_ARTICLES , data})
        }
    }
}

export default actions