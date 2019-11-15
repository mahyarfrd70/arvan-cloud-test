import React from 'react'
import { Route } from 'react-router-dom'
import AppLayout from '../../layouts/app'
import Articles from './index'
import NewArticle from '../NewArticle'

let appRoutes = [
    { 
        path: '', 
        component: Articles ,
        exact: true

    },
    { 
        path: 'page/:page', 
        component: Articles,
        exact: true
    },
    { 
        path: 'create', 
        component: NewArticle,
        exact: true
    },
    { 
        path: 'edit/:slug', 
        component: NewArticle,
        exact: true
    }
]

export default (props) => {
    return (
        <AppLayout>
            {appRoutes.map(route => (
                <Route
                    key={route.path}
                    path={`${props.match.url}/${route.path}`}
                    component={route.component}
                    exact={route.exact}/>
            ))}
        </AppLayout>
    )
}
