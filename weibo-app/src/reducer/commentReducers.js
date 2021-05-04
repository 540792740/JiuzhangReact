import React from 'react';
import { GET_COMMENTS, RESET_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from "../constance/actions";
import { uniq } from '../utils';

const initState = {
  comments: [],
};


export default function commentReducers(state = initState, action) {
  const { comments, params: { page } = {}, total } = action.payload || {};
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: uniq([...state.comments, ...comments]),
        page,
        total,
      }
    case RESET_COMMENTS:
      return initState;
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(({ id }) => id !== action.payload),
      }
    default:
      return state;
  }
}