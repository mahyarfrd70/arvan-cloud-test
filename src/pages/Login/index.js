import React, {useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { Input } from 'antd'
import {Redirect} from 'react-router-dom'
import loginActions from '../../redux/login/actions'

let { changeInputLogin } = loginActions

export default () => {
    let mobileNumber = useSelector(state => state.Login.mobileNumber)
    let isLoggedIn = useSelector(state => state.App.isLoggedIn)
    let dispatch = useDispatch()
    let changeMobileNumber=(e)=>{
        dispatch(changeInputLogin(e))
    }
    if(isLoggedIn){
        return <Redirect to='/app'/>
    }
    return (
        <div>
            <Input 
                onChange={changeMobileNumber}
                value={mobileNumber}
                name='mobileNumber'
            />
        </div>
    )
}
