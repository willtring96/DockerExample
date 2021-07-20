import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login_Page from './Pages/Login/Login_Page';

export default class LoginIn extends Component {
    state = {};

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login_Page} />
                </Switch>
            </div>
        );
    }
}
