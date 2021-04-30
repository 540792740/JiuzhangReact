import { GET_TIMELINE } from "../constance/actions";

const initialState = {
    home: { posts: [], page: 0 }
}

export default function timelineReducer(state = initialState, action) {
    const statuses = action.payload || {}
    const { page } = action.params || 1
    switch (action.type) {
        case GET_TIMELINE:
            return {
                ...state,
                home: {
                    posts: [...state.home.posts, ...statuses],
                    page,
                },
            }
        default:
            return state
    }
}