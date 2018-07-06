import { INIT_FEED, REFRESH_FEED } from '../actions/types'

function  defaultDataMap() {
    return {
        feedsMap: new Map()
    }
}

export default function (state = defaultDataMap(), action) {
    switch(action.type) {
        case INIT_FEED:
        console.log("Refreshing feeds", action.payload)
        return Object.assign({}, state, {
            items: action.payload
        });

        case REFRESH_FEED:
        console.log("Refreshing feeds", action.payload)
        return Object.assign({}, state, {
            items: action.payload
        });

        default:
        return state
    }
}