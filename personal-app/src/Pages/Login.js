import React, { useState } from 'react';
import { Tabs, Form, Checkbox, Row } from 'antd';
import styles from '../styles/login.module.less';
import SubmitButton from '../Components/SubmitButton'
import InputItem from '../Components/InputItem'
import {
    UserOutlined, LockOutlined, MobileTwoTone, MailTwoTone,
    AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function Login(props) {
    const [form] = Form.useForm()
    const [autoLogin, setAutoLogin] = useState(true)
    const onFinish = (value) => {
        console.log(value);
    }
    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <Form form={form} onFinish={onFinish}>
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab='Username Login' key='1'>
                            <InputItem
                                prefix={
                                    <UserOutlined style={{ color: 'blue' }} />
                                }
                                name='Username'
                                placeholder='Username'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'please check your Username'
                                    }
                                ]}
                            />
                            <InputItem
                                prefix={
                                    <LockOutlined style={{ color: 'blue' }} />
                                }
                                name='Password'
                                placeholder='Password'
                                type='password'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'please check your Password'
                                    }
                                ]}
                            />
                            <Row justify='space-between'>
                                <Checkbox
                                    checked={autoLogin}
                                    onChange={(e) => setAutoLogin(e.target.checked)}
                                >
                                    Auto Login
                                </Checkbox>
                                <a href='#'>Forgot Password</a>
                            </Row>
                            <SubmitButton > Submit </SubmitButton>
                        </TabPane>
                        <TabPane tab='Mobile Login' key='2'>
                            <InputItem
                                prefix={
                                    <MobileTwoTone style={{ color: 'blue' }} />
                                }
                                name='Username'
                                placeholder='Username'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'please check your Username'
                                    }
                                ]}
                            />
                            <InputItem
                                prefix={
                                    <MailTwoTone />
                                }
                                name='Captcha'
                                placeholder='Password'
                                type='password'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'please check your Captcha'
                                    }
                                ]}
                            />
                            <SubmitButton > Submit </SubmitButton>
                        </TabPane>
                    </Tabs>
                </Form>
                <div className={styles.other}>
                    Other Login Ways
                    <AlipayCircleOutlined className={styles.icon} />
                    <TaobaoCircleOutlined className={styles.icon} />
                    <WeiboCircleOutlined className={styles.icon} />
                    <Link className={styles.register} to='/register'>register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;