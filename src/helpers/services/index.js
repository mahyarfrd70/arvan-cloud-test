import Axios from "axios";
import config from './config'

class Api {
     get = async (path) => {
         try{
             let response = await Axios.get(`${config.baseUrl}${path}`)
             return response
         }catch(err){
             throw err
         }
     }
}

let instanceApi = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new Api()
        }
        return instance
    }
})()

export default instanceApi()