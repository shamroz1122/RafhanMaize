import { combineReducers } from 'redux'
import orders from './orderReducer'
import auth from './authReducer'
import dashboard from './dashboardReducer'
export default combineReducers({
    auth,
    orders,
    dashboard
}) 