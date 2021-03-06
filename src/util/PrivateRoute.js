import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = ({ component, ...args }) => {
    return (
        <Route
        component={withAuthenticationRequired(component, {
            onRedirecting: () => <div>Loading...</div>
        })}>
            {args.length ? args : null}
        </Route>
    )
}

export default PrivateRoute
