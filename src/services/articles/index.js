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
    getSingleArticle = async (path , headers={}) =>{
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
    addArticle = async (path ,body ,headers={}) =>{
        try{
            let response = await Api.post(path, body, {
                auth: true,
                headers: headers
            })
            return response
        }catch(err){
            throw err
        }
    }
    editArticle = async (path ,body ,headers={}) =>{
        try{
            let response = await Api.put(path, body, {
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