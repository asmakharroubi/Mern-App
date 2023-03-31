import { combineReducers } from "redux"
import BookingReducer from './BookingReducer'
import UserReducer from './UserReducer'
const rootReducer = combineReducers({UserReducer})
export default rootReducer