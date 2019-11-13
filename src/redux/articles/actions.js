import articlesService from '../../services/articles'
import confirmActions from '../confirm/actions'

let {changeConfirmLoading} = confirmActions

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
                dispatch({type: actions.CHANGE_LOADING_ARTICLES , data: false})
                throw err
            }
        }
    },
    deleteArticlesActions: (article , pageSize , page) => {
        return async dispatch => {
            dispatch(changeConfirmLoading(true))
            try{
                let response = await articlesService.deleteArticle(`/articles/${article.slug}`)
                let articleResponse = await actions.fetchArticlesActions(pageSize , page)
                dispatch({type: actions.CHANGE_ARTICLES_DATA , data: articleResponse.data})
                dispatch(changeConfirmLoading(false))
                return response.data
            }catch(err){
                dispatch(changeConfirmLoading(false))
                throw err
            }
        }
    }
}

export default actions