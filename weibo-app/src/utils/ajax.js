import axios from 'axios';
import * as interceptors from './interceptors'

function getAxiosInstance(options) {
    const instance = axios.create();
    interceptors.install(instance, options);
    instance.defaults.headers.post['Content-Type'] = 'application/json';
    return instance;
}

function makeGet() {
    return function (url, option) {
        const instance = getAxiosInstance(option);
        return instance({
            url,
            credentials: 'include',
            method: 'get',
            ...option
        })
    }
}


function makePost() {
    return function (url, option) {
        const instance = getAxiosInstance(option);
        return instance({
            url,
            credentials: 'include',
            method: 'post',
            ...option
        })
    }
}

export default {
    get: makeGet(),
    post: makePost()
}