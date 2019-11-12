import Api from '../api'

class Auth {
    constructor(){
        this.tokenKey = 'arven-cloud-auth'
        this.auth = localStorage.getItem(this.tokenKey) || ''
    }

    getAuth = async ()=>{
        if(this.auth){
            try{
                let response = await Api.get('/user' , {
                    auth: true
                })
                return response
            }catch(err){
                this.logout()
                throw ''
            }
        }
        throw ''
    }

    setAuth = ( token ) => {
        localStorage.setItem(this.tokenKey , token)
    }

    logout=(callback)=>{
        localStorage.removeItem(this.tokenKey)
        this.auth = ''
        callback()
    }
}

let instanceAuth = (function(){
    let instance;
    return ()=>{
        if(!instance){
            instance = new Auth()
        }
        return instance
    }
})()

export default instanceAuth()