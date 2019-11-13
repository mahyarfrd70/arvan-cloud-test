import React from 'react'
import {useSelector} from 'react-redux'
import Header from '../appHeader'
import Navbar from '../navbar'
import './style.css'

export default function AppLayout({children}) {
    let userData = useSelector(state => state.AppReducer.userData)
    return (
        <div className='app-layout-container'>
            <Header 
                username={userData.username}/>
            <Navbar/>
            <div className='app-content-container'>
                {children}
            </div>
        </div>
    )
}
