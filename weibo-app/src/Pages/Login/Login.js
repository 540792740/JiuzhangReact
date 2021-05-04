import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'redux-react-hook';
import { getAccess } from '../../actions/account';

function Login(props) {
    // const code = 'abc'
    const { query: { code } } = queryString.parseUrl(window.location.href);
    const dispatch = useDispatch();
    useEffect(() => {
        if (code) {
            dispatch(getAccess({ code }));
        }
    }, [code, dispatch]);
    return (
        <div>
            {code}
        </div>
    );
}

export default Login;
