class Auth {
    constructor(){
        this.tokenKey = 'asan-shahr-auth'
        this.auth = localStorage.getItem(this.tokenKey)
        debugger
    }

    getAuth=()=>{
        debugger
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