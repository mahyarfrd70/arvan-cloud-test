import actions from './actions'

let initState = {
    loading: true,
    idToken: null
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_LOADING_AUTH:
            return {
                ...state,
                loading: action.data
            }
        case actions.SET_TOKEN_AUTH:
            return {
                ...state,
                idToken: action.data
            }
        default: 
            return state
    }
}