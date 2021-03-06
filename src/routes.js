import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'


// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

import Charts from './views/Charts/Charts'
import DynamicCharts from './views/Charts/DynamicCharts'
import VictoryExampleCharts from './views/Charts/VictoryCharts'
import Dashboard from './views/Dashboard/'
import Users from './views/Users/'
import Settings from './views/Settings/'
import Buttons from './views/Components/Buttons/'
import Cards from './views/Components/Cards/'
import Forms from './views/Components/Forms/'
import Modals from './views/Components/Modals/'
import SocialButtons from './views/Components/SocialButtons/'
import Switches from './views/Components/Switches/'
import Tables from './views/Components/Tables/'
import Tabs from './views/Components/Tabs/'
import FontAwesome from './views/Icons/FontAwesome/'
import SimpleLineIcons from './views/Icons/SimpleLineIcons/'
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import Widgets from './views/Widgets/'


const Root = ({store, history}) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" name="Home" component={Full}>
                <IndexRoute component={Dashboard}/>
                <Route path="dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="users" name="Users" component={Users}/>
                <Route path="settings" name="Settings" component={Settings}/>
                <Route path="components/" name="Components">
                    <IndexRoute component={Buttons}/>
                    <Route path="buttons" name="Buttons" component={Buttons}/>
                    <Route path="cards" name="Cards" component={Cards}/>
                    <Route path="forms" name="Forms" component={Forms}/>
                    <Route path="modals" name="Modals" component={Modals}/>
                    <Route path="social-buttons" name="Social Buttons" component={SocialButtons}/>
                    <Route path="switches" name="Swithces" component={Switches}/>
                    <Route path="tables" name="Tables" component={Tables}/>
                    <Route path="tabs" name="Tabs" component={Tabs}/>
                </Route>
                <Route path="icons/" name="Icons">
                    <IndexRoute component={FontAwesome}/>
                    <Route path="font-awesome" name="Font Awesome" component={FontAwesome}/>
                    <Route path="simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                </Route>
                <Route path="widgets" name="Widgets" component={Widgets}/>
                <Route path="charts/" name="Charts">
                    <IndexRoute component={FontAwesome}/>
                    <Route path="main" name="Main" component={Charts}/>
                    <Route path="dynamic" name="Dynamic" component={DynamicCharts}/>
                    <Route path="victory" name="Victory" component={VictoryExampleCharts}/>

                </Route>
            </Route>

            <Route path="auth/" name="Pages" component={Simple}>
                <IndexRoute component={Page404}/>
                <Route path="login" name="Login Page" component={Login}/>
                <Route path="register" name="Register Page" component={Register}/>
            </Route>

            <Route path="oops/" name="Pages" component={Simple}>
                <IndexRoute component={Page404}/>
                <Route path="404" name="Page 404" component={Page404}/>
                <Route path="500" name="Page 500" component={Page500}/>
            </Route>

        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default Root
