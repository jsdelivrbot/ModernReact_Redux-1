import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

//adds the key 'books' to the global application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
