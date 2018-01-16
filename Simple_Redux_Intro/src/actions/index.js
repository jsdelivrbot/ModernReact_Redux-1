

export function selectBook(book) {
  //SelectBook is an action creator that needs to return an action -> an object with a type property and 'payload'
  return {
    type: 'BOOK_SELECT',
    payload: book
  }
}

