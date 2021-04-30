import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Affix, Input } from 'antd';
import styles from '../../styles/new.module.scss'
import { LeftOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function New({ match }) {
    console.log('props', match);
    const { params: { id } } = match;
    return (
        <div className={styles.container}>
            <Affix offsetTop={0}>
                <Row
                    className={styles.appbar}
                    justify="space-between"
                    align="middle"
                >
                    <Link to="/"><LeftOutlined /></Link>
                    <a
                        className={styles.send}
                        href="#!"
                    >
                        {id ? '评论' : '发送'}
                    </a>
                </Row>
            </Affix>
            <div className={styles.content}>
                <TextArea
                    className={styles.textarea}
                    placeholder={id ? '写评论...' : '分享新鲜事...'}
                />
            </div>
        </div>
    );
}

export default New;