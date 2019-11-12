import React from 'react'
import { Route } from 'react-router-dom'
import AppLayout from '../../layouts/app'
import App from './index'

let appRoutes = [
    { path: '', component: App }
]

export default (props) => {
    return (
        <AppLayout>
            {appRoutes.map((route,i) => (
                <Route
                    key={i}
                    path={`${props.path}/${route.path}`}
                    component={route.component}/>
            ))}
        </AppLayout>
    )
}
