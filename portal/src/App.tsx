import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Login from './Login';
import { CookiesProvider } from 'react-cookie';
import { __BASE_URL__ } from '../configs/global_assets';
import { hot } from 'react-hot-loader';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFileDownload,
    faEnvelope,
    faFilter,
    faSort,
    faSortAlphaDown,
    faSortAlphaUp,
} from '@fortawesome/free-solid-svg-icons';
library.add(faFileDownload, faEnvelope, faFilter, faSort, faSortAlphaDown, faSortAlphaUp);

//css Imports
import 'bootstrap/dist/css/bootstrap.min.css';

//TODO: Create protected route and remove logic from Main function
function App() {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <div className="app">
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/" component={Main} />
                    </Switch>
                </div>
            </BrowserRouter>
        </CookiesProvider>
    );
}
declare const module: Record<string, unknown>;
export default hot(module)(App);
