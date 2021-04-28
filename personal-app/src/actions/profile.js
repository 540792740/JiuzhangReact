import * as api from '../api/api';
import { message } from 'antd'

export function getUserProfile(payload = {}) {
    return async () => {
        let res = await api.getCaptcha(payload);
        console.log(res);
        const { data: { code, message: msg } } = await api.getUserProfile(payload);
        if (code === 0) {
            message.success(`${msg}`)
        } else {
            message.error(msg)
        }
    }
}
