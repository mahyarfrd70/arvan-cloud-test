import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import registerActions from '../../redux/register/actions'
import LoginLayout from '../../components/loginLayout'
import CustomForm from '../../components/customForm'
import inputs from './inputObjects'
import './style.css'

let { changeInputRegister, registerUser } = registerActions

export default () => {
    let registerFormValue = useSelector(state => state.Register.registerFormValue)
    let isLoggedIn = useSelector(state => state.Auth.isLoggedIn)
    let dispatch = useDispatch()
    let submitForm = () => {
        console.log(registerFormValue)
        debugger
        // dispatch(login(loginFormValue))
    }
    if (isLoggedIn) {
        return <Redirect to='/'/>
    }
    return (
        <LoginLayout formTitle='Register'>
            <CustomForm
                onChangeValue={(e)=>dispatch(changeInputRegister(e))}
                inputs={inputs}
                onSubmit={submitForm}
                buttonTitle='Register'/>
            <p className='text-link'>Already Registered? <Link className='login-register-link' to='/login'>Login</Link></p>
        </LoginLayout>
    )
}
