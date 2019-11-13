import actions from './actions'

let initState = {
    loading: false,
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_LOADING_DELETE_ARTICLES: 
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}