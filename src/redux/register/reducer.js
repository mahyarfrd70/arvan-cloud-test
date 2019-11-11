import actions from './actions'

let initState = {
    registerFormValue: {}
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_FORM_VALUE_REGISTER:
            return {
                ...state,
                registerFormValue: {
                    ...state.registerFormValue,
                    [action.data.name] : action.data.value
                }
            }
        default: 
            return state
    }
}