import React, { Component } from 'react';
// { Component } defines a variable Component =  React.Component --> es6 obj destructing

class SearchBar extends Component {
  constructor(props) {
    super(props);
        // initialize state inside constructor always!
    this.state = { searchTerm: '' };
  }
  render() {
      // change state using setState, never reassign this.state = outside of constructor
      // every time the component state is change, the it's re-rendered, new state being recorded
    return (
        <div className="search-bar">
          <input
            // controlled field -> form element whose value is set by the state.
            // value is now determined by state, instead of state determining value
            // value will no be the correct value of the input at any given time
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            />
        </div>
    );
  }

  //each time the input is changed, onInputChange is called with the new value
  //onInputChange passes the new value(term) to onSearchTermChange(which was passed as a prop from App)
  //onSearchTermChange in turn, calls videoSearch in App with the term, state is changed, and the components are rerendered
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}










export default SearchBar;
