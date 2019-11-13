import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import loginActions from '../../redux/login/actions'
import LoginLayout from '../../layouts/loginLayout'
import CustomForm from '../../components/customForm'
import Alert from '../../components/alert'
import inputs from './inputObjects'
import buildErrorMessage from '../../helpers/buildErrorMessage'
import './style.css'

let { changeInputLogin, loginUser } = loginActions

export default ({history}) => {
    let loginFormValue = useSelector(state => state.Login.loginFormValue)
    let loading = useSelector(state => state.Login.loading)
    let isLoggedIn = useSelector(state => state.Auth.idToken ? true : false)
    let dispatch = useDispatch()
    let submitForm = async () => {
        try{
            let response = await dispatch(loginUser(loginFormValue))
            Alert.show('success' , 'you login successfully')
            history.push('/articles')
        }catch(err){
            console.log(err)
            let errorMessages = buildErrorMessage(err.errors)
            Alert.show('danger' , errorMessages)
        }
    }
    if (isLoggedIn) {
        return <Redirect to='/articles' />
    }
    return (
        <LoginLayout formTitle='LOGIN'>
            <CustomForm
                loading={loading}
                errorTitle='Login Failed!'
                errorDescription='User name and/or Password is invalid'
                onChangeValue={(e) => dispatch(changeInputLogin(e))}
                inputs={inputs}
                onSubmit={submitForm}
                buttonTitle='Login' />
            <p className='text-link'>Don't have account? <Link className='login-register-link' to='/register'>Register Now</Link></p>
        </LoginLayout>
    )
}
