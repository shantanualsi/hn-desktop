import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import feedReducer from './feedReducer'


const reducer = combineReducers({feeds: feedReducer, routing: routerReducer})
export default reducer