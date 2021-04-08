import React from 'react';
import { Tabs, Form } from 'antd';
import styles from '../styles/login.module.less';
import SubmitButton from '../Components/SubmitButton'
import InputItem from '../Components/InputItem'
import { UserOutlined, LockOutlined, MobileTwoTone, LockTwoone } from '@ant-design/icons';

const { TabPane } = Tabs;

function Login(props) {
    const [form] = Form.useForm()
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
                                    <LockTwoone />
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

            </div>
        </div>
    );
}

export default Login;