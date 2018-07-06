import * as HNService from "../services/HackernewsService";
import { INIT_FEED, REFRESH_FEED } from './types'

/** Dispatch to the reducer */
export const fetchTopStories = () => (dispatch) => {
    console.log("Fetching Top stories");
    return HNService.fetchTopStories()
        .then(dataArray => {
            dispatch({
               type: INIT_FEED,
               payload: dataArray 
            });
        })
        .catch(err => {
            console.log("Error while fetching top stories. ", err);
        });
}