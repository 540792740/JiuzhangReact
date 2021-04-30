import { GET_TIMELINE } from "../constance/actions";
import fakeData from '../constance/fakeData';


const initialState = {
    home: fakeData
}

export default function timelineReducer(state = initialState, action) {
    const { statuses } = action.payload || {}
    switch (action.type) {
        case GET_TIMELINE:
            return {
                ...state,
                home: statuses
            }
        default:
            return state
    }
}