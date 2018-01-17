import axios from 'axios';

const API_KEY = 'd12e11a879929abedb235a0601aa0da0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
//helps keep action types consistent, by convention 
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
  //country code 'us' is static in this instance
const url = `${ROOT_URL}&q=${city},us`;
//request will be a promise returned from axios.get call
const request = axios.get(url);

console.log('Request: ', request)

  return {
    type: FETCH_WEATHER,
    //returning --promise-- as payload
    payload: request
  }
}