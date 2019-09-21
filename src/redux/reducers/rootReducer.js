import { combineReducers } from 'redux'
import order from './orderReducer'
import auth from './authReducer'
import dashboard from './dashboardReducer'
import product from './productReducer'
import customer from './customerReducer'
export default combineReducers({
    auth,
    order,
    dashboard,
    product,
    customer
}) 