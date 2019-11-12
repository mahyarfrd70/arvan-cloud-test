import actions from './actions'

let initState = {
    loginFormValue: {}
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
        default: 
            return state
    }
}