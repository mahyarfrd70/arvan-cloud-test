import React from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import options from './options'
import './style.css'

export default function Navbar({isOpen , onClickToggleMenu, ...props}) {
    return (
        <>
            <div 
                className={`mask-page-navbar ${isOpen && 'open'}`} 
                onClick={onClickToggleMenu}></div>
            <div className={`navbar-app-container ${isOpen && 'open'}`}>
                <h5>Post</h5>
                <Nav
                    vertical>
                    {options.map(item => (
                        <NavLink 
                            key={item.lable} 
                            exact  
                            to={item.href} 
                            activeClassName='active-nav-link'>
                            <NavItem>
                                {item.lable}
                            </NavItem>
                        </NavLink>
                    ))}
                </Nav>
            </div>
        </>
    )
}
