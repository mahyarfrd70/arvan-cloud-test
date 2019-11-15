import Api from '../../helpers/api'

class tagsService {
    getTags = async (path) =>{
        try{
            let response = await Api.get(path, {
                auth: true
            })
            return response
        }catch(err){
            throw err
        }

    }
}

let instanceTagsService = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new tagsService()
        }
        return instance
    }
})()

export default instanceTagsService()