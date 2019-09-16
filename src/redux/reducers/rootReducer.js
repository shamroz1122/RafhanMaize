import { combineReducers } from 'redux'
import orders from './orderReducer'
import auth from './authReducer'

export default combineReducers({
    auth,
    orders
}) 