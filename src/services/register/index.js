import Api from '../../helpers/api'

class registerService {
    registerUser = async (path , body , headers) =>{
        try{
            let response = await Api.post(path, body, headers)
            return response
        }catch(err){
            throw err
        }

    }
}

let instanceRegisterService = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new registerService()
        }
        return instance
    }
})()

export default instanceRegisterService()