import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
import Header from '../appHeader'
import Navbar from '../navbar'
import './style.css'

export default function AppLayout({children , history , props}) {
    let userData = useSelector(state => state.AppReducer.userData)
    let [isOpenDrawer , setIsOpenDrawer] = useState(true) 
    let location = useLocation();
    let onClickToggleMenu=()=>{
        setIsOpenDrawer(!isOpenDrawer)
    }

    useEffect(()=>{
        onClickToggleMenu()
    }, [location])
    return (
        <div className='app-layout-container'>
            <Header 
                username={userData.username}
                onClickToggleMenu={onClickToggleMenu}/>
            <Navbar 
                isOpen={isOpenDrawer}
                onClickToggleMenu={onClickToggleMenu}/>
            <div className='app-content-container'>
                {children}
            </div>
        </div>
    )
}
