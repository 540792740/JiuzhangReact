import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Affix, Input } from 'antd';
import styles from '../../styles/new.module.scss'
import { LeftOutlined } from '@ant-design/icons';
import { useDispatch } from 'redux-react-hook';
import { createComment } from '../../actions/comments';

const { TextArea } = Input;

function New({ match }) {
    const dispatch = useDispatch();
    const { params: { id } } = match;
    const [value, setValue] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        if (id) {
            let param = new URLSearchParams()
            param.append('id', id)
            param.append('comment', value)
            dispatch(createComment(param, true));
        }
    }
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
                        onClick={handleClick}
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