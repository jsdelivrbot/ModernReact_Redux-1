import { FETCH_WEATHER } from '../actions/index';

//state initialized as an empty array because it will collect a list of data from each city search over time
export default function(state=[], action){
  console.log('action recieved: ', action)



  switch(action.type){
    case FETCH_WEATHER : 
    //to collect different city data over time, we *can't just keep pushing new data into our state array
    // return state.push(action.payload.data) will not work!
    // --REDUX ALSO doesnt want you to ever mutate state, like React you can't state.something = state.something else or whatever
    //.push changes the original array, mutating it. Instead of mutation we need to return a new instant of state

    //concat doesnt mutate state, it returns a new instance of state, concatinating the old array with the new data
    //return state.concat([action.payload.data]);
    //orrrr, we can es6ify itlike so:

    return [ action.payload.data, ...state ];

    }

  

  return state;
}