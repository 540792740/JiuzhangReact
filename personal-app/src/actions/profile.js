import * as api from '../api/api';
import { message } from 'antd'

export function getCaptcha(payload = {}) {
    return async () => {
        const { data: { code, message: msg, data: { capture } } } = await api.getCaptcha(payload);
        if (code === 20018) {
            message.success(`${msg}, captcha is ${capture}`)
        } else {
            message.error(msg)
        }

    }
}


export function register(payload = {}) {
    return async () => {
        const { data: { code, message: msg } } = await api.register(payload);
        if (code === 20018) {
            message.success(msg)
        } else {
            message.error(msg)
        }

    }
} 