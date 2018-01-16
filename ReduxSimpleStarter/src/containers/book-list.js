import React, { Component } from 'react';
//used to connect react components to redux
import { connect } from 'react-redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//the obj retuned will be available to the component as state.props
//if the state ever changes, the container will instantly rerender with the new list of books.
//'state' refers to the global state created in index.js
function mapStateToProps(state){
  //whatever is returns from here will show up as props inside of BookList
  return {
    books: state.books
  };
}

//connect takes a function and component and produces the container
//the container is aware of the state that is contained by reduce
export default connect(mapStateToProps)(BookList);

