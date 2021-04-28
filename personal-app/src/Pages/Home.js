import { Card, Col, Divider, Row, Avatar } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from '../styles/home.module.less';
import Articles from '../Components/Articles'
import Applications from '../Components/Applications'
import Projects from '../Components/Projects'
import { currentUser, fakeList } from '../data/data'
import {
    ContactsOutlined, HomeOutlined, ClusterOutlined
} from '@ant-design/icons';
import TagList from '../Components/TagList';
import { useDispatch, useMappedState } from 'redux-react-hook'
import { getUserProfile } from '../actions/profile'

const articleList = fakeList(10);
const applicationList = fakeList(15);
const projectList = fakeList(10);

const mapState = state => state.profile;

const operationTabList = [
    {
        key: 'Articles',
        tab: (
            <span>Article<span>(8)</span></span>
        )
    },
    {
        key: 'Applications',
        tab: (
            <span>Application<span>(10)</span></span>
        )
    },
    {
        key: 'Projects',
        tab: (
            <span>Project<span>(18)</span></span>
        )
    },
]

function Home() {
    const [tabKey, settabKey] = useState('Articles')
    const dispatch = useDispatch();
    const res = useMappedState(mapState);

    console.log("test", res);
    const onTabChange = (value) => {
        settabKey(value)
    }

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const contentTab = (value) => {
        switch (value) {
            case 'Articles':
                return <Articles list={articleList} />;
            case 'Applications':
                return <Applications list={applicationList} />;
            case 'Projects':
                return <Projects list={projectList} />;
            default:
                return <Articles list={articleList} />
        }
    }

    const renderUserInfo = () => (
        <div className={styles.details}>
            <p>
                <ContactsOutlined className={styles.userInfoIcon} />
                {currentUser.title}
            </p>
            <p>
                <ClusterOutlined className={styles.userInfoIcon} />
                {currentUser.group}
            </p>
            <p>
                <HomeOutlined className={styles.userInfoIcon} />
                {(currentUser.geographic || { province: { label: '' } }).province.label}
                {(currentUser.geographic || { city: { label: '' } }).city.label}
            </p>
        </div>
    )
    return (
        <div className={styles.container}>
            <Row gutter={24}>
                <Col lg={7} md={24}>
                    <Card bordered={false} style={{ marginBottom: 24 }}>
                        <div className={styles.avatarHolder}>
                            <img alt='' src={currentUser.avatar}></img>
                            <div className={styles.name}>{currentUser.name}</div>
                            <div>{currentUser.signature}</div>
                        </div>
                        {renderUserInfo()}
                        <Divider dashed />
                        <TagList tags={currentUser.tags}></TagList>
                        <Divider dashed />
                        <div className={styles.team}>
                            <div className={styles.teamTitle}>Team</div>
                            <Row gutter={36}>
                                {currentUser.notice && currentUser.notice.map((item) => (
                                    <Col key={item.id} lg={24} xl={12}>
                                        <Link to="/setting">
                                            <Avatar size="small" src={item.logo} />
                                            {item.member}
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Card>
                </Col>

                <Col lg={17} md={24}>
                    <Card
                        bordered={false}
                        tabList={operationTabList}
                        onTabChange={onTabChange}
                        activeTabKey={tabKey}
                    >
                        {contentTab(tabKey)}

                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Home;