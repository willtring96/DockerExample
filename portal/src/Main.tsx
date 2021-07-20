import React, { ReactElement, useEffect, useState } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import PortalNav from './Components/PortalNav/PortalNav';
import { isPortalUser, PortalUser } from './Models/PortalUser';
//Pages
import HomePage from './Pages/Home/Home_Page';
import DAIPage from './Pages/DAI/DAI_Page';
import Whitelist_Page from './Pages/Whitelisting/Whitelist_Page';
import { CookieClear } from './Components/CookieComponent/CookieFunctions';
import Platform_Home_Page from './Pages/AutomationReports/Platform_Home_Page';
import Auto_Report_Page from './Pages/AutomationReports/Auto_Report_Page';

// interface State {
//     portalUser: PortalUser;
// }

// export default class Main extends Component<RouteComponentProps, State> {
//     state = {
//         portalUser: isPortalUser(this.props.location.state) ? this.props.location.state : ({} as PortalUser),
//     };
//     // componentDidMount() {
//     //     //Check that state was transfered
//     //     const state: PortalUser = this.props.location.state as PortalUser;
//     //     if (!state || !isPortalUser(state)) {
//     //         this.props.history.push('/login');
//     //     } else {
//     //         this.setState({
//     //             portalUser: state,
//     //         });
//     //     }
//     // }

//     //TODO: Create handle logout method to reset 'portalUser' state
//     render() {
//         return (
//             <div>
//                 <PortalNav />
//                 <Switch>
//                     <Route
//                         path="/home"
//                         render={(props) => <HomePage {...props} portalUser={this.state.portalUser} />}
//                     />
//                     <Route path="/dai" render={(props) => <DAIPage {...props} portalUser={this.state.portalUser} />} />
//                     <Route path="/whitelisting" component={Whitelist_Page} />
//                     <Redirect from="/" to="/home" />
//                 </Switch>
//             </div>
//         );
//     }
// }

export default function Main(props: RouteComponentProps): ReactElement {
    const [portalUser, setPortalUser] = useState({} as PortalUser);

    const handleLogout = () => {
        setPortalUser({} as PortalUser);
        localStorage.clear();
        CookieClear();
        props.history.push('/login');
        // window.location.replace("https://login.sso.charter.com/nidp/saml2/sso?sid=0&option=credential");
    };

    useEffect(() => {
        const loggedInUser = localStorage.getItem('portalUser');
        if (loggedInUser) {
            const foundUser: PortalUser = JSON.parse(loggedInUser);
            setPortalUser(foundUser);
        } else {
            props.history.push('/login');
        }
    }, [props.history]);

    if (!isPortalUser(portalUser)) {
        const loggedInUser = localStorage.getItem('portalUser');
        if (loggedInUser) {
            const foundUser: PortalUser = JSON.parse(loggedInUser);
            if (isPortalUser(foundUser)) {
                setPortalUser(foundUser);
            } else {
                props.history.push('/login');
            }
        } else {
            props.history.push('/login');
        }
    }
    return (
        <div>
            <PortalNav logout={handleLogout} email={portalUser.email} />
            <br />
            <Switch>
                <Route path="/home" render={(props) => <HomePage {...props} />} />
                <Route path="/dai" render={(props) => <DAIPage {...props} portalUser={portalUser} />} />
                <Route path="/whitelisting" render={(props) => <Whitelist_Page {...props} portalUser={portalUser} />} />
                <Route
                    exact
                    path="/platform"
                    render={(props) => <Platform_Home_Page {...props} portalUser={portalUser} />}
                />
                <Route path="/autoreport" render={(props) => <Auto_Report_Page {...props} portalUser={portalUser} />} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
}
