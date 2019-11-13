import articlesService from '../../services/articles'

let actions={
    CHANGE_ARTICLES_DATA:'CHANGE_ARTICLES_DATA',
    CHANGE_LOADING_ARTICLES: 'CHANGE_LOADING_ARTICLES',
    fetchArticlesActions: (pageSize, page) => {
        return async dispatch => {
            dispatch({type: actions.CHANGE_LOADING_ARTICLES , data: true})
            try{
                let response = await articlesService.getArticles(`/articles?limit=${pageSize}&offset=${pageSize*(page-1)}`)
                dispatch({type: actions.CHANGE_ARTICLES_DATA , data: response.data})
                dispatch({type: actions.CHANGE_LOADING_ARTICLES , data: false})
                return response.data
            }catch(err){
                dispatch({type: actions.CHANGE_LOADING_ARTICLES , data: true})
                throw err
            }
        }
    }
}

export default actions