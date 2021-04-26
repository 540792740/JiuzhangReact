import * as api from '../api/api'

export default function getCaptcha(payload = {}) {
    return async () => {
        console.log('test');
        const result = await api.getCaptcha(payload);
        console.log(result);

    }
} 