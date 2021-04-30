import ajax from '../utils/ajax';
import { getAccessCode } from '../constance';

export function getAccess({ code }) {
    return ajax.post(getAccessCode(code));
}