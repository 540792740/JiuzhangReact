import { GET_PROFILE } from "../constance/actions";

const initialState = {
    test: { name: 'haha' }
}

export default function profileRedicer(state = initialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}