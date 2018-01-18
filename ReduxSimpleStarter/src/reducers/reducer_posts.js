import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){

  switch(action.type){
    case FETCH_POSTS:
      //need to transform the array of posts into an object where the key is the post id
      //this will make it easier to reference specific posts later
      //lodash can transform an array into an object for us
      return _.mapKeys(action.payload.data, "id");

    default: 
      return state;
  }


}