import actions from './actions'

let initState = {
    articlesData: {},
    loading: true,
    deleteLoading: false
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
        case actions.CHANGE_LOADING_DELETE_ARTICLES: 
            return {
                ...state,
                deleteLoading: action.data
            }
        default: 
            return state
    }
}