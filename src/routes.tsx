import * as React from 'react';
import {Route, Switch} from "react-router-dom";

import App from "./app";
import Home from "./modules/home/home";
import Repository from "./modules/repository/repository";

const Routes = () => (
    <App>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/repository" component={Repository}/>
            <Route path="/" component={Home}/>
        </Switch>
    </App>
);
export default Routes;