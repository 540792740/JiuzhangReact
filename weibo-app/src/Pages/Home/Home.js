import React, { useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { getUserProfile } from '../../actions/timeline';
import styles from '../../styles/home.module.scss'
import { Card } from 'antd';
import Post from './Post'

function Home() {

    const dispatch = useDispatch();

    const { home = [] } = useMappedState((state) => {
        return state.timelineReducer
    });


    useEffect(() => {
        dispatch(getUserProfile)
    }, [dispatch])

    return (
        <div className={styles.container}>
            {home.map(({
                id,
                ...rest
            }) => (
                < Post key={id} {...rest} />
            ))
            }
        </div >
    );
}

export default Home;