import { GET_TIMELINE } from "../constance/actions";

const initialState = {
    home: { posts: [], page: 0 }
}

export default function reducer(state = initialState, action) {
    const { statuses, id } = action.payload || {};
    const { page } = action.params || {};
    switch (action.type) {
        case GET_TIMELINE:
            return {
                ...state,
                home: {
                    posts: [...state.home.posts, ...statuses],
                    page,
                },
            }
        // case SET_CURRENT_POST:
        //     return {
        //         ...state,
        //         current: id,
        //     }
        default:
            return state;
    }
}