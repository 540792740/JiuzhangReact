import React, { useEffect } from 'react';
import { Row, Affix } from 'antd';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { getUserProfile } from '../../../actions/timeline';
import styles from './home.module.scss'
import Post from '../Post'
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';


function Home() {

    const dispatch = useDispatch();
    const { home: { posts = [], page } = {} } = useMappedState((state) => {
        return state.timelineReducer
    });
    const handleInfiniteOnLoad = () => {
        console.log('====================================');
        dispatch(getUserProfile({ page: page + 1 }));
    }
    useEffect(() => {
        console.log("step 1");
        dispatch(getUserProfile({ page: 1 }))
    }, [dispatch])

    return (
        <div className={styles.container}>
            <Affix offsetTop={0}>
                <Row
                    className={styles.appbar}
                    justify="space-between"
                    align="middle"
                >
                    <a href='/' ><UserOutlined className={styles.icon} /></a>
                    <div className={styles.appTitle}>Weibo app</div>
                    <Link to="/new"><EditOutlined className={styles.icon} /></Link>
                </Row>
            </Affix>
            <InfiniteScroll
                initialLoad={false}
                pageStart={1}
                loadMore={handleInfiniteOnLoad}
                hasMore
            >
                {posts.map(({
                    id,
                    ...rest
                }) => (
                    < Post
                        key={id + '' + Math.random() * 100}
                        id={id + '' + Math.random() * 100}
                        {...rest}
                    />
                ))
                }
            </InfiniteScroll>

        </div >
    );
}

export default Home;