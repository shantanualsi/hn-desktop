/**
 * Service for HackerNews API
 * @author Shantanu Alshi <shantanu.alshi@gmail.com>
 */

var endPoint = 'https://hacker-news.firebaseio.com/v0'
var options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

function storyRef(id) {
  return fetch(endPoint + '/item/' + id + '.json', options)
} 

function fetchStory() {
  return storyRef(id).then(r => r.json())
}

function fetchStoryDetails(ids) {
  return ids.forEach(id => storyRef(id))
}

function fetchTopStories() {
  return fetch(endPoint + '/topstories.json')
    .then(r => r.json())
}

module.exports = {
  fetchStory,
  fetchTopStories,
  fetchStoryDetails
}