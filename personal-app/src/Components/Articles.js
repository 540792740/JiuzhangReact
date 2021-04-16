import React from 'react';
import { List, Tag } from 'antd';
import styles from '../styles/articles.module.less';
import { StarTwoTone, LikeOutlined, MessageFilled } from '@ant-design/icons';
import ArticleListContent from '../Components/ArticleListContent'

const IconText = ({ icon, text }) => (
    <span>
        {icon} {text}
    </span>
)

function Articles({ list }) {
    return (
        <div>
            <List
                size="large"
                className={styles.articleList}
                rowKey="id"
                itemLayout="vertical"
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText key="star" icon={<StarTwoTone />} text={item.star} ></IconText>,
                            <IconText key="like" icon={<LikeOutlined />} text={item.like} ></IconText>,
                            <IconText key="star" icon={<MessageFilled />} text={item.message} ></IconText>
                        ]}
                    >
                        <List.Item.Meta
                            title={
                                <a className={styles.listItemMetaTitle} href={item.href}>
                                    {item.title}
                                </a>
                            }
                            description={
                                <span>
                                    <Tag>Ant Design </Tag>
                                </span>
                            }
                        />
                        <ArticleListContent data={item} />
                    </List.Item>
                )}
            >
            </List >
        </div >
    );
}

export default Articles;