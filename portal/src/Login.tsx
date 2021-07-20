import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login_Page from './Pages/Login/Login_Page';

export default function Login(): ReactElement {
    return (
        <Switch>
            <Route exact path="/login" component={Login_Page} />
        </Switch>
    );
}
