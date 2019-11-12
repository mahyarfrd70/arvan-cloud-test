import actions from './actions'

let initState = {
    registerFormValue: {},
    loading: false
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
        case actions.CHANGE_LOADING_REGISTER:
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}