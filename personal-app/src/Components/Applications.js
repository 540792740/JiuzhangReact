import React from 'react';
import { List, Card, Avatar, Tooltip, Dropdown, Menu } from 'antd';
import styles from '../styles/applications.module.less';
import { DownloadOutlined, EditOutlined, ShareAltOutlined, EllipsisOutlined } from '@ant-design/icons';
import numeral from 'numeral';

const itemMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com">
                2st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com">
                3st menu item
            </a>
        </Menu.Item>
    </Menu>
)

const CardInfo = ({ activeUser, newUser }) => (
    <div className={styles.cardInfo}>
        <div>
            <p>Active User</p>
            <p>{activeUser}</p>
        </div>
        <div>
            <p>New User</p>
            <p>{newUser}</p>
        </div>
    </div>
)

function formatMillion(val) {
    const v = val * 1;
    if (!v || Number.isNaN(v)) return '';
    let result = val;
    if (val > 10000) {
        result = (
            <span>
                <span>{Math.floor(val / 10000)}</span>
                万
            </span>
        )
    }
    return result;
}

function Applications({ list }) {
    return (
        <div>
            <List
                size="large"
                className={styles.firstCardList}
                rowKey="id"
                grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
                itemLayout="vertical"
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                    >
                        <Card
                            hoverable
                            bodyStyle={{ paddingBottom: 20 }}
                            actions={[
                                <Tooltip key="download" title="download"><DownloadOutlined /></Tooltip>,
                                <Tooltip key="edit" title="edit"><EditOutlined /></Tooltip>,
                                <Tooltip key="share" title="share"><ShareAltOutlined /></Tooltip>,
                                <Dropdown overlay={itemMenu} key="ellipsis"><EllipsisOutlined /></Dropdown>
                            ]}
                        >
                            <Card.Meta
                                avatar={<Avatar size="small" src={item.avatar} ></Avatar>}
                                title={item.title} />
                            <div>
                                <CardInfo
                                    activeUser={formatMillion(item.activeUser)}
                                    newUser={numeral(item.newUser).format('0,0')}
                                />
                            </div>
                        </Card>
                    </List.Item>
                )}
            >
            </List >
        </div >
    );
}

export default Applications;