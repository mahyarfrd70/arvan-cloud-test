import actions from './actions'

let initState = {
    mobileNumber: ''
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_MOBILE_NUMBER_LOGIN:
            return {
                ...state,
                [action.data.name] : action.data.value
            }
        default: 
            return state
    }
}