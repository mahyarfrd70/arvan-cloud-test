import actions from './actions'

let initState = {
    loading: true
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_LOADING_APP:
            return {
                ...state,
                loading: actions.data
            }
    }
}