import React from 'react'
import { Route } from 'react-router-dom'
import {useAuth} f

export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route>
            {...rest}
            render={props =>{

            }}
        </Route>
    )
}
