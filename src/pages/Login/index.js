import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { Input, Button } from 'antd'
import {Redirect} from 'react-router-dom'
import loginActions from '../../redux/login/actions'

let { changeInputLogin , login } = loginActions

export default () => {
    let mobileNumber = useSelector(state => state.Login.mobileNumber)
    let isLoggedIn = useSelector(state => state.Auth.isLoggedIn)
    let dispatch = useDispatch()
    let changeMobileNumber=(e)=>{
        dispatch(changeInputLogin(e))
    }
    let clickLoginButton = () => {
        dispatch(login(mobileNumber))
    }
    if(isLoggedIn){
        return <Redirect to='/'/>
    }
    return (
        <div>
            <Input 
                onChange={changeMobileNumber}
                value={mobileNumber}
                name='mobileNumber'
            />
            <Button
                primary
                onClick={clickLoginButton}>Login</Button>
        </div>
    )
}
