import * as api from '../api/api';
import { message } from 'antd'

export function getCaptcha(payload = {}) {
    return async () => {
        let res = await api.getCaptcha(payload);
        console.log(res);
        const { data: { code, message: msg } } = await api.getCaptcha(payload);
        if (code === 20020) {
            message.success(`${msg}`)
        } else {
            message.error(msg)
        }
    }
}


export function register(payload = {}) {
    return async () => {
        const { data: { code, message: msg } } = await api.register(payload);
        if (code === 20023) {
            message.success(msg)
        } else {
            message.error(msg)
        }

    }
}

export function login(payload = {}) {
    return async () => {
        let res = await api.login(payload);
        console.log("login", res);
        // const { code, message: msg, data: { token } = {} } = await api.login(payload);
        // if (code === 0) {
        //     message.success(msg);
        //     window.localStorage.setItem('personal-app-token', token);
        //     window.location.href = "/";
        // } else {
        //     message.error(msg);
        // }
    }
}