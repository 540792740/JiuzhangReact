import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer'
import commentReducers from './commentReducers'
const rootReducer = combineReducers({
    timelineReducer,
    commentReducers
})

export default rootReducer