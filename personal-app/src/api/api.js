import ajax from '../utils/ajax';
import { HOST } from './contants'

export function getCaptcha(param) {
    return ajax.post(`${HOST}/user/getCaptcha`, {
        data: param
    })
}

export function register(param) {
    return ajax.post(`${HOST}/user/register`, { data: param })
}

export function login(params) {
    return ajax.post(`${HOST}/user/login`, { data: params });
}