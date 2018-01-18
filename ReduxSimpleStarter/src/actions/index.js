import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=mkd123'


export const FETCH_POSTS = "fetch_posts";
export function fetchPosts () {

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  //request is a promise and will be automatically resolved by redux-promise
  return {
    type: FETCH_POSTS,
    payload: request
  }
}