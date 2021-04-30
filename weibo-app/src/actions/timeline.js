import * as api from '../api/timelineapi';
import { GET_TIMELINE, SET_CURRENT_POST } from "../constance/actions"
// import { resetComments } from './comments';
import fakeData from '../constance/fakeData';



export function getUserProfile(params = {}) {
    return async (dispatch) => {
        // const data = await api.getTimeLine(params);
        const data = fakeData;
        dispatch({
            type: GET_TIMELINE,
            payload: data,
            params
        })
    }
}



export function setCurrentPost(payload = {}) {
    return async (dispatch) => {
        // await dispatch(resetComments());
        dispatch({
            type: SET_CURRENT_POST,
            payload,
        });
    }
}