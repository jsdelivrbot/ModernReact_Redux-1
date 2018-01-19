import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/'
//field is a component -> one per each form state
//reduxForm -> a function, similar to redux's connect function. Connects us to our formReducer


//each Field takes a 'component' prop. Field knows how to communication with redux-form, but 
//it doesnt know how to produce any jsx to render to the screen. 
//the 'component' prop is a function tells Field what jsx will render to the screen.

//we still need to wire the inner input to the Field component. The 'field' arg contains some event handlers that 
//will help us do that. if renderForm finds an error property that matches the field name, it will rerender the component and pass an error prop
//equal to the string we can the validate function. field.meta.error will display that error message for us 
//we only want to display that message if the field has been updated to the 'touched' state. Show empty string otherwise
class PostsNew extends Component {
  renderField(field) {
    //destructuring of nested objects
    const { meta : { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control" 
          type="text"
          {...field.input}
        />
        <div className="text-help">
        {touched ? error : ''}
        </div>
      </div>
    )
  }

//redux-form does not handle any sort of posting, etc. So on submittal, we need to use both reduxform for validation and state management
//but also our own code to handle posting etc
//on submit should call a redux action creator
//props.history is passed to the component from <Router> when rendered. Using it as a callback to our action creator, when called history.push(path)
// will automatically Route us to that new path when called

onSubmit(values){
  this.props.createPost(values, () => {
    this.props.history.push('/');
  });
}

//handleSubmit was passed as a props from reduxForm
//on submit says run redux-forms handleSubmit, run its jazz, and then call the callback we defined to handle the rest
// onSubmit needs to be bound when its called as a callback that will be executed in a different context

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

//called automatically by reduxForm on submit
//values will be an object of the values from the different form fields
//if errors remains empty, reduxForm will assume the submit is fine, otherwise
//if errors has any properties, the form will be assumed invalid
function validate(values) {
  const errors = {};
  if(values.title && values.title.length <3){
      errors.title = "Title must be at least 3 characters!";
  }
  if(!values.title){
    errors.title = "Please enter a title!";
  }  
  if(!values.categories){
    errors.categories = "Please enter some categories";
  }
  if(!values.content){
    errors.content = "Please enter some content";
  }
  return errors;
}




//form: is a unique name of the form
//each piece of form state needs a unique name
//like the connection helper, reduxForm also adds many different props to our new component
//stacking connect-like functions: connect returns a valid react component that can be passed as an input into reduxForm
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);