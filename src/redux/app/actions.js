import Api from '../../helpers/services'

let actions={
    GET_USER_LIST_APP:'GET_USER_LIST_APP',
    CHANGE_LOADING_APP: 'CHANGE_LOADING_APP',
    getUserList: () => {
        return async dispatch => {
            dispatch({type: actions.CHANGE_LOADING_APP , data: true})
            try{
                let response = await Api.get('api/offers?pageSize=10&pageNumber=1')
                dispatch({type: actions.GET_USER_LIST_APP , data: response.data})
                dispatch({type: actions.CHANGE_LOADING_APP , data: false})
                return response
            }catch(err){
                throw err
            }
        }
    }
}

export default actions