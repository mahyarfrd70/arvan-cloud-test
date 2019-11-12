import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import registerActions from '../../redux/register/actions'
import LoginLayout from '../../layouts/loginLayout'
import CustomForm from '../../components/customForm'
import inputs from './inputObjects'
import Alert from '../../components/alert'
import buildErrorMessage from '../../helpers/buildErrorMessage'
import './style.css'

let { changeInputRegister, registerUser } = registerActions

export default ({history}) => {
    let registerFormValue = useSelector(state => state.Register.registerFormValue)
    let loading = useSelector(state => state.Register.loading)
    let isLoggedIn = useSelector(state => state.Auth.idToken ? true : false)
    let dispatch = useDispatch()
    let submitForm = async () => {
        try{
            let response = await dispatch(registerUser(registerFormValue))
            Alert.show('success' , 'you registered successfully')
            history.push('/app')
        }catch(err){
            let errorMessages = buildErrorMessage(err.errors)
            Alert.show('danger' , errorMessages)
        }
    }
    if (isLoggedIn) {
        return <Redirect to='/app' />
    }
    return (
        <LoginLayout formTitle='Register'>
            <CustomForm
                loading={loading}
                errorTitle='Register Failed!'
                errorDescription='User name and/or Email and/or Password is invalid'
                onChangeValue={(e) => dispatch(changeInputRegister(e))}
                inputs={inputs}
                onSubmit={submitForm}
                buttonTitle='Register' />
            <p className='text-link'>Already Registered? <Link className='login-register-link' to='/login'>Login</Link></p>
        </LoginLayout>
    )
}
