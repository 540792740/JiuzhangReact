import axios from 'axios';

function getAxiosInstance() {
    const instance = axios.create();
    return instance;
}

function makeGet() {
    return function (url, option) {
        const instance = getAxiosInstance();
        return instance({
            url,
            method: 'get',
            ...option
        })
    }
}


function makePost() {
    return function (url, option) {
        const instance = getAxiosInstance();
        return instance({
            url,
            method: 'post',
            ...option
        })
    }
}

export default {
    get: makeGet(),
    post: makePost()
}