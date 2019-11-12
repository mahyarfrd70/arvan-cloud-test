import actions from './actions'

let initState = {
    userData: {},
    loading: true
}

export default function(state=initState , action){
    switch(action.type){
        case actions.SET_USER_DATA_APP: 
            return {
                ...state,
                userData: {...action.data}
            }
        case actions.CHANGE_LOADING_APP: 
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}