import Api from '../../helpers/api'

class articlesService {
    getArticles = async (path , headers={}) =>{
        try{
            let response = await Api.get(path, {
                auth: true,
                headers: headers
            })
            return response
        }catch(err){
            throw err
        }

    }
    deleteArticle = async (path , headers={}) =>{
        try{
            let response = await Api.delete(path, {
                auth: true,
                headers: headers
            })
            return response
        }catch(err){
            throw err
        }

    }
}

let instanceArticlesService = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new articlesService()
        }
        return instance
    }
})()

export default instanceArticlesService()