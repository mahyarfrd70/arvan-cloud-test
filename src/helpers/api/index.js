import Axios from "axios";
import config from './config'
import Auth from '../auth'

class Api {
    buildHeaders = (options , mainHeaders) => {
        let headers = {
            ...mainHeaders , 
            ... options && options.headers && options.headers 
        }
        if(options && options.auth){
            headers.Authorization = `Token ${Auth.auth}`
        }
        return headers
    }

     get = async (path , options = {} ) => {
         let configRequest = {
             headers : {...this.buildHeaders(options , config.headers)}
         }
         try{
             let response = await Axios.get(`${config.baseUrl}${path}`, configRequest)
             return response
         }catch(err){
             throw err
         }
     }
     post = async (path, body, options = {}) => {
         let configRequest = {
            headers: {...this.buildHeaders(options, config.headers)},
        }
         try{
             let response = await Axios.post( `${config.baseUrl}${path}` , {...body} , configRequest )
             return response
         }catch(err){
             throw err
         }
     }
     put = async (path , body , options) => {
        let configRequest = {
            headers: {...this.buildHeaders(options, config.headers)},
        }
         try{
             let response = await Axios.put(`${config.baseUrl}${path}`, {...body} , configRequest)
             return response
         }catch(err){
             throw err
         }
     }
     delete = async (path , options) => {
        let configRequest = {
            headers: {...this.buildHeaders(options, config.headers)},
        }
         try{
             let response = await Axios.delete(`${config.baseUrl}${path}`, configRequest)
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