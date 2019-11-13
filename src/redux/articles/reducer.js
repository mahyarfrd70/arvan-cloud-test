import actions from './actions'

let initState = {
    articlesData: {},
    loading: true,
}

export default function(state=initState , action){
    switch(action.type){
        case actions.CHANGE_ARTICLES_DATA: 
            return {
                ...state,
                articlesData: {...action.data}
            }
        case actions.CHANGE_LOADING_ARTICLES: 
            return {
                ...state,
                loading: action.data
            }
        default: 
            return state
    }
}