import * as api from '../api/profileApi';
import { message } from 'antd';
import { GET_PROFILE } from "../constance/actions"



export function getUserProfile(payload = {}) {
    return async (dispatch) => {
        // let res = await api.getUserProfile(payload);
        dispatch({
            type: GET_PROFILE,
            payload: { name: 'abc' }
        })
        //     const { code, message: msg, data } = await api.getUserProfile(payload);
        //     if (code === 0) {
        //         dispatch({
        //             type: "GET_PROFILE",
        //             payload: data
        //         })
        //     } else {
        //         message.error(msg)
        //     }
    }
}
