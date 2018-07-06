import * as HNService from "../services/HackernewsService";
import { INIT_FEED, REFRESH_FEED } from './types'
import { displayPartsToString } from "typescript";

var endPoint = 'https://hacker-news.firebaseio.com/v0'
var options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}
/** Dispatch to the reducer */
export const fetchTopStories = () => (dispatch) => {
    console.log("Fetching Top stories");
    
    fetch(endPoint + '/topstories.json')
        .then(r => r.json())
        .then(dataArray => {
            let data = []

            dataArray = dataArray.slice(0, 10);
            dataArray.forEach(id => {
                fetch(endPoint + '/item/' + id + '.json', options)
                    .then(detail => detail.json())
                    .then(r => data.push(r))
                    .catch(e => console.log("Something bad happened", e))
            });

            dispatch({
                type: INIT_FEED,
                payload: data
            });
        })
        .catch(err => {
            console.log("Error while fetching top stories. ", err);
        });

}