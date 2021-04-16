import React from 'react';
import { Avatar } from 'antd';
import moment from 'moment'
import styles from '../styles/articleListContent.module.less';

function ArticleListContent({ data: { content, avatar, href, onwer, updateAt } }) {
    return (
        <div>
            <div>{content}</div>
            <div className={styles.extra}>
                <Avatar src={avatar} size="small"></Avatar>
                <a href={href}>{onwer}</a> update <a href={href}>{href}</a>
                <em>{moment(updateAt).format('YYYY-MM-DD HH:mm')}</em>
            </div>

        </div>
    );
}

export default ArticleListContent;