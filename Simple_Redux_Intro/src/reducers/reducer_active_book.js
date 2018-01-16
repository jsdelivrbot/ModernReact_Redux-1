//state arg is not application state, only the state that this reducer
//is responsible for.

//all reducers are passed all actions, so we need to handle actions that don't concern this reducer..
//a base state is used to just return current state if the reducer isn't concerned a with the new state passed

//*es6! can default the value or an arg if it comes in as undefined.. using undefined will through an error
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECT' :
      return action.payload;
      //don't ever return a mutated state like,
      //state.title = book.title
      //return state
  }

  //base case
  return state;
}