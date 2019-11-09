import actions from './actions'

let initState = {
    loading: true,
    isLoggedIn: false
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_LOADING_APP:
            debugger
            return {
                ...state,
                loading: action.data
            }
        case actions.IS_LOGGED_IN_APP:
                debugger
            return {
                ...state,
                isLoggedIn: action.data
            }
        default: 
            return state
    }
}