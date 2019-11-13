import React from 'react'
import {Spinner} from 'reactstrap'
import './style.css'

export default function Loading({color, size, type, ...props}) {
    return (
        <div className='loading-container-component'>
            <Spinner size={size} color={color} type={type}/>
        </div>
    )
}
