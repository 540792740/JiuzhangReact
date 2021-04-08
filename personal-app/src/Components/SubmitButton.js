import React from 'react';
import { Button, Form } from 'antd';
import styles from '../styles/button.module.less';

function SubmitButton(props) {
    const { children } = { ...props }
    return (
        <Form.Item>
            < Button className={styles.submit} type='primary' size='large' htmlType="submit" >
                {children}
            </Button>
        </Form.Item>
    );
}

export default SubmitButton;