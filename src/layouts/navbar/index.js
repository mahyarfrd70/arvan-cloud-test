import React from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './style.css'

let options = [
    { lable: 'All Articles', href: '/articles' },
    { lable: 'All Articles', href: '/articles/create' },
]

export default function Navbar() {
    return (
        <div className='navbar-app-container'>
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
    )
}
