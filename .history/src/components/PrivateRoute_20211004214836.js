import React from 'react'
import { Route } from 'react-router-dom'
import {useAuth}

export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route>
            {...rest}
            render={props =>{

            }}
        </Route>
    )
}
