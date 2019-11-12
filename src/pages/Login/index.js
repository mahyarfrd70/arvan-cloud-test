import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import loginActions from '../../redux/login/actions'
import LoginLayout from '../../components/loginLayout'
import CustomForm from '../../components/customForm'
import inputs from './inputObjects'
import './style.css'

let { changeInputLogin, loginUser } = loginActions

export default () => {
    let loginFormValue = useSelector(state => state.Login.loginFormValue)
    let isLoggedIn = useSelector(state => state.Auth.isLoggedIn)
    let dispatch = useDispatch()
    let submitForm = () => {
        console.log(loginFormValue)
        debugger
        // dispatch(login(loginFormValue))
    }
    if (isLoggedIn) {
        return <Redirect to='/'/>
    }
    return (
        <LoginLayout formTitle='LOGIN'>
            <CustomForm
                onChangeValue={(e)=>dispatch(changeInputLogin(e))}
                inputs={inputs}
                onSubmit={submitForm}
                buttonTitle='Login'/>
            <p className='text-link'>Don't have account? <Link className='login-register-link' to='/register'>Register Now</Link></p>
        </LoginLayout>
    )
}