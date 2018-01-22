import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

//if state is undef we'll default it to an empty object
//post data comes in as action.payload.data
export default function(state = {}, action){

  switch(action.type){
    
    //delete post re-routes us back to index which triggers another get for all of the posts, we could just rely on that the update the posts, but it may not be best practice
    //instead, updating our local state before the request will ensure posts on the index page are allows displayed correctly, even on a very slow connection
    case DELETE_POST:
      //the payload on delete was an id, lodash omit will delete the key:value out of state based on that id
      return _.omit(state, action.payload)
    


    //we should be adding to our state when we make a fetch, not rewriting it
    case FETCH_POST:
      const post = action.payload.data;
      //state needs to contain the id of the post as a key (like below)
      // const newState =  { ...state };
      // newState[post.id] = post;
      // return newState 
      //es6ified -> key interpolation. basically, take state, add a key of data.id and set its vale as payload.data
      return {...state, [action.payload.data.id]: action.payload.data};
      //when we re-fetch posts, which happens alot, this ^ will just overwrite the existing object in state. This would be a huge pain with an array, application level state as an object is much easier!

    case FETCH_POSTS:
      //need to transform the array of posts into an object where the key is the post id
      //this will make it easier to reference specific posts later
      //lodash can transform an array into an object for us
      return _.mapKeys(action.payload.data, "id");




      


      default: 
        return state;
    }
    


  
}

