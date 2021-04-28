import ajax from '../utils/ajax';
import { HOST } from './contants'

export function getUserProfile(params) {
    return ajax.post(`${HOST}/account/center`, { data: params });
}