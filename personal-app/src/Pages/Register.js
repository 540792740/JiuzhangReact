import React, { useState } from 'react';
import InputItem from '../Components/InputItem'
import { Col, Form, Popover, Progress, Row, Select } from 'antd';
import {
    UserOutlined, LockOutlined
} from '@ant-design/icons';
import styles from '../styles/register.module.less';
import SubmitButton from '../Components/SubmitButton'
import { Link } from 'react-router-dom';


const { Option } = Select

const passwordStateMap = {
    ok: (
        <div className={styles.success}>
            Strong
        </div>
    ),
    pass: (
        <div className={styles.warning}>
            Middle
        </div>
    ),
    poor: (
        <div className={styles.error}>
            Weak
        </div>
    )
}

const passwordPrograssMap = {
    ok: 'successful',
    pass: 'normal',
    poor: 'exception'
}


const Register = (props) => {
    const [form] = Form.useForm()
    const [visable, setVisable] = useState(false)
    const [prefix, setPrefix] = useState('86')
    const [popValue, setPopValue] = useState(0)
    const onFinish = (value) => {
        console.log(value);
    }
    const checkConfirm = (_, value) => {
        const promise = Promise;
        if (!visable) setVisable(true)
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject('Password not Match')
        }
        return promise.resolve();
    }
    const checkPassword = (_, value) => {
        const promise = Promise;
        if (!value) { return promise.reject('Please type password') }
        if (!visable) setVisable(true)
        if (value.length <= 10 && value.length * 10 !== popValue) setPopValue(value.length * 10 > 100 ? 100 : value.length * 10)
        if (value && form.getFieldValue('confirm')) {
            form.validateFields(['confirm']);
        }
        return promise.resolve();
    }
    const renderPasswordPrograss = () => {
        const value = form.getFieldValue('password');
        let status = getPasswordStatus();
        return value && value.length && (
            <div className={styles[`progress-${status}`]}>
                <Progress
                    className={styles.progress}
                    status={passwordPrograssMap[status]}
                    strokeWidth={6}
                    percent={popValue}
                ></Progress>
            </div>
        )
    }

    const getPasswordStatus = () => {
        let value = form.getFieldValue('password');
        if (value && value.length > 9) return 'ok';
        if (value && value.length > 5) return 'pass';
        else return 'poor';
    }

    return (
        <div className={styles.registerContainer}>
            <div className={styles.register}>
                <Form form={form} onFinish={onFinish}>
                    <InputItem
                        prefix={
                            <UserOutlined style={{ color: 'blue' }} />
                        }
                        name='mail'
                        placeholder='Mail Address'
                        size='large'
                        rules={[
                            {
                                required: true,
                                message: 'please type your email address'
                            },
                            {
                                type: 'email',
                                message: 'please correct your email address'
                            }
                        ]}
                    />
                    <Popover placement="right"
                        content={visable && (
                            <div>
                                {passwordStateMap[getPasswordStatus()]}
                                {renderPasswordPrograss()}
                                <div>
                                    Please type at least 6 digits
                                </div>
                            </div>)
                        }
                        visible={visable}
                    >
                        <InputItem
                            prefix={
                                <LockOutlined style={{ color: 'blue' }} />
                            }
                            name='password'
                            placeholder='Password at least 6 digits'
                            type='password'
                            size='large'
                            rules={[
                                {
                                    required: true,
                                    message: 'please check your Password'
                                },
                                {
                                    validator: checkPassword,
                                }
                            ]}
                        />
                    </Popover>

                    <InputItem
                        prefix={
                            <LockOutlined style={{ color: 'blue' }} />
                        }
                        name='confirm'
                        placeholder='Confirm your password'
                        type='password'
                        size='large'
                        rules={[
                            {
                                required: true,
                                message: 'please confirm your Password'
                            },
                            {
                                validator: checkConfirm,
                            }
                        ]}
                    />
                    <Row>
                        <Col span={6}>
                            <Select
                                size='large'
                                value={prefix}
                                onChange={(value) => { setPrefix(value) }}
                                style={{ width: '100%' }}
                            >
                                <Option value={'86'}>+86</Option>
                                <Option value={'87'}>+87</Option>
                            </Select>
                        </Col>
                        <Col span={18}>
                            <InputItem
                                prefix={
                                    <LockOutlined style={{ color: 'blue' }} />
                                }
                                name='mobile'
                                placeholder='Confirm your password'
                                type='password'
                                size='large'
                                rules={[
                                    {
                                        required: true,
                                        message: 'please type your mobile number'
                                    },
                                    {
                                        pattern: /^\d{11}$/,
                                        message: 'mobile number error'
                                    }
                                ]}
                            />
                        </Col>
                    </Row>
                    <InputItem
                        name='Captcha'
                        size='large'
                        rule={[
                            {
                                required: true,
                                message: 'Type your captcha'
                            }
                        ]}
                        placeholder='Please type your captcha'
                    >

                    </InputItem>
                    <Row justify='space-between ' align='middle'>
                        <Col span={8}>
                            <SubmitButton>Regist</SubmitButton>
                        </Col>
                        <Col span={16}>
                            <Link className={styles.loginLink} to='/Login'> Go to Login Page</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Register;