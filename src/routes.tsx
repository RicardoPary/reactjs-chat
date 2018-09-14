import * as React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "./modules/home/home";
import Repository from "./modules/repository/repository";

const Routes = () => (
    <div>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/repository" component={Repository}/>w
        </Switch>
    </div>
);
export default Routes;