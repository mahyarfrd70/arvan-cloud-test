import React from 'react'
import Loading from '../loading'

export default function AppLoading({ loading, children }) {
    if (loading) {
        return (
            <div className='app-loading-container'>
                <Loading />
            </div>
        )
    }
    return children
}
