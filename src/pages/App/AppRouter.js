import React from 'react'
import { Route } from 'react-router-dom'
import App from './index'

let appRoutes = [
    { path: '', component: App }
]

export default (props) => {
    return (
        <div>
            {appRoutes.map((route,i) => (
                <Route
                    key={i}
                    path={`${props.path}/${route.path}`}
                    component={route.component}/>
            ))}
        </div>
    )
}
