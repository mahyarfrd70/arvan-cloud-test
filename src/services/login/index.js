import Api from '../../helpers/api'

class loginService {
    loginUser = async (path , body , headers) =>{
        try{
            let response = await Api.post(path, body, headers)
            return response
        }catch(err){
            throw err
        }

    }
}

let instanceLoginService = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new loginService()
        }
        return instance
    }
})()

export default instanceLoginService()