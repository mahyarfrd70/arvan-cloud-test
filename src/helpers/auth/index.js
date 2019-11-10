class Auth {
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

    setAuth = ( mobileNumber ) => {
        if(mobileNumber){
            localStorage.setItem(this.tokenKey , true)
            this.auth = true
            return true
        }
        return false

    }

    logOut=(callback)=>{
        localStorage.removeItem(this.tokenKey)
        this.auth = false
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