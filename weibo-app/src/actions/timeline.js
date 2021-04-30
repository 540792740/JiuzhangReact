import * as api from '../api/timelineapi';
import { GET_TIMELINE } from "../constance/actions"



export function getUserProfile(payload = {}) {
    return async (dispatch) => {
        // const data = await api.getTimeLine(payload);
        const data = { name: 'abc' }
        dispatch({
            type: "GET_TIMELINE",
            payload: data
        })


    }
}
