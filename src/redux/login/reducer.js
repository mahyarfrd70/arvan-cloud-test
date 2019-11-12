import actions from './actions'

let initState = {
    loginFormValue: {},
    loading: false
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_FORM_VALUE_LOGIN:
            return {
                ...state,
                loginFormValue: {
                    ...state.loginFormValue,
                    [action.data.name] : action.data.value
                }
            }
        case actions.CHANGE_LOADING_LOGIN:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}