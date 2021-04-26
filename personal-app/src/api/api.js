import ajax from '../utils/ajax';
import { HOST } from './contants'

export function getCaptcha(param) {
    return ajax.post(`${HOST}/user/getCaptcha`, { data: param })
}

