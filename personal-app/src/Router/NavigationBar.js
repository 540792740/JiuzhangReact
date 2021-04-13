import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

function NavigationBar(props) {
    return (
        <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/Register' component={Register}></Route>
            <Route path='/' component={Home}></Route>
        </Switch>
    );
}

export default NavigationBar;