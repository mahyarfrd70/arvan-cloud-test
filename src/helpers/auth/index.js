export default class Auth {
    constructor(){
        this.tokenKey = 'asan-shahr-auth'
        this.auth = localStorage.getItem(this.tokenKey)
    }

    getAuth=()=>{
        if(this.auth){
            return true
        }
        return false
    }

    setAuth = (mobileNumber)=>{
        if(mobileNumber){
            localStorage.setItem(this.tokenKey , true)
        }
    }

    logOut=(callback)=>{
        localStorage.removeItem(this.tokenKey)
        callback()
    }
}

export default (function(){
    let instance ;
    if(instance){
        instance = new Auth()
    }
    return instance
})