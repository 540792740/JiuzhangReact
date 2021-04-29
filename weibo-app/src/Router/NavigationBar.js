import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

const Home = lazy(() => import('../Pages/Home'))

function NavigationBar() {
    return (
        <Suspense fallback={
            <div >
                Loading
            </div>
        }>
            <Switch>
                <Route path='/' component={Home}></Route>
            </ Switch>
        </Suspense>

    );
}

export default NavigationBar;