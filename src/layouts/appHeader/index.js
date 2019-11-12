import React from 'react'
import {Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import Auth from '../../helpers/auth'
import authAction from '../../redux/auth/actions'
import appAction from '../../redux/app/actions'
import './style.css'

let {setAuth} = authAction
let {setUserData} = appAction

export default function AppHeader({username, history , ...props}) {
    let dispatch = useDispatch()
    function logout(){
        Auth.logout(()=>{
            dispatch(setAuth(''))
            dispatch(setUserData({}))
        })
    }
    return (
        <div className='app-header-container'>
            <div className='header-right-container'>
                <h6>Arvan Challenge</h6>
                <p>welcom {username}</p>
            </div>
            <Button 
                className='header-btn'
                outline 
                color="info" 
                onClick={logout}>Logout</Button>
        </div>
    )
}
