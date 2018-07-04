import { combineReducers, createStore } from 'redux'
import { routerReducer } from 'react-router-redux'


function  defaultDataMap() {
    return {
        feedsMap: new Map()
    }
}

const initialState = defaultDataMap()

function data (state = defaultDataMap(), action) {
    switch(action.type) {
        case 'INIT':
        state = defaultDataMap()
        return state

        case 'REFRESH_FEED':
        state = defaultDataMap()
        return state
    }
    return state
}

const reducer = combineReducers({data, routing: routerReducer})

const store = createStore(reducer)
export default store