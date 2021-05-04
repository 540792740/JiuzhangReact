import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

const Home = lazy(() => import('../Pages/Home/Home/Home'))
const New = lazy(() => import('../Pages/New/New'))
const Login = lazy(() => import('../Pages/Login/Login'))

function NavigationBar() {
    return (
        <Suspense fallback={
            <div >
                Loading
            </div>
        }>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/new' component={New}></Route>
                <Route exact path='/comments/:id' component={New}></Route>
            </ Switch>
        </Suspense>

    );
}

export default NavigationBar;