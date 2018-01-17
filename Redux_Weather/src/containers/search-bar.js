import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: '' };

    //this 'instance of SearchBar' has a function onInputChange
    //bind that function to 'this' and re-declare it as bound to this original context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);


  }
//all DOM event handlers produce an event object
onInputChange(event){
  //onChange is calling this.onInputChange, on hand-off the context of 'this' is lost inside of the callback
  //this.setState will then throw an error unless the context of 'this' is bound to the constructor above
  this.setState({ term: event.target.value })
}
onFormSubmit(event){
  event.preventDefault();
  //call action creator with the search term
  this.props.fetchWeather(this.state.term);
  //set state back to an empty string to rerender and clear the input field
  this.setState({ term: '' });
}

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input 
        placeholder='Get a five-day forecast in your favorite cities'
        className='form-control'
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}
//null is passed as the first arguement because this container does't care about the application state
export default connect(null, mapDispatchToProps)(SearchBar);
//this builds the container and gives us access to this.props.fetchWeather inside of our container