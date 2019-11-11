import React from 'react'
import './style.css'

export default function LoginLayout({children, formTitle}) {
    return (
        <div className='login-container'>
            <div className='login-form-container'>
                <h2>{formTitle}</h2>
                <div className='login-form-container_form'>
                    {children}
                </div>
            </div>
        </div>
    )
}
