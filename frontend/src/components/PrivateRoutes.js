import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({path, component: Component, ...props}) {
    return localStorage.token
        ? <Route exact path={path} render={(routerProps) => <Component {...routerProps} {...props}/>} />
        : <Redirect to="/login" />
}
export default PrivateRoute;