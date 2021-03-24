import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({children, ...props}) {
    return <Route {...props} render={() => {
        return localStorage.token 
            ? children
            : <Redirect to='/' />
    }} />
}
