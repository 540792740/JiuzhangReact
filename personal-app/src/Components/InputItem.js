import React, { useState, useEffect } from 'react';
import { Input, Form, Button, Row, Col } from 'antd';
import styles from '../styles/inputItem.module.less';

function InputItem(props) {
    const { name, onClick, rules, ...rest } = props
    const [timing, setTiming] = useState(false)
    const [count, setCount] = useState(props.countDown || 5)
    const clickHandler = () => {
        onClick();
        setTiming(true)
    }

    useEffect(() => {
        let interval;
        if (timing) {
            interval = window.setInterval(() => {
                setCount((preSecond) => {
                    if (preSecond <= 1) {
                        setTiming(false);
                        clearInterval(interval);
                    }
                    return preSecond - 1;
                })
            }, 1000)
        }
        return () => {
            console.log('cleanup');
            clearInterval(interval);
        }
    }, [timing])
    return (
        <Form.Item name={name} rules={rules}>
            {name === 'Captcha' ?
                <Row gutter={8}>
                    <Col span={16}><Input {...rest} style={{ background: 'none' }} /></Col>
                    <Col span={8}>
                        <Button
                            size='large'
                            className={styles.btn}
                            onClick={clickHandler}
                        >
                            {timing ? `${count}s` : 'Captcha'}
                        </Button></Col>
                </Row> : <Input {...rest} style={{ background: 'none' }} />
            }


        </Form.Item >
    );
}

export default InputItem;