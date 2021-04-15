import { Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import styles from '../styles/navbar.module.less';

const Home = lazy(() => import('../Pages/Home'))
const Login = lazy(() => import('../Pages/Login'))
const Register = lazy(() => import('../Pages/Register'))

function NavigationBar(props) {
    return (
        <Suspense fallback={
            <div className={styles.spinWrap}>
                <Spin size='large' />
            </div>
        }>
            <Switch>
                <Route exact path='/login' component={Login}></Route>
                <Route exact path='/Register' component={Register}></Route>
                <Route path='/' component={Home}></Route>
            </ Switch>
        </Suspense>

    );
}

export default NavigationBar;