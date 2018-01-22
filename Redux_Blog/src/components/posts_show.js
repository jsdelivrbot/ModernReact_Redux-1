import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions';

class PostsShow extends Component {
componentDidMount() {

  //you could wrap this statement in something like if(!this.props.post) to prevent the double fetching..  
  //probably only if network usage is a huge concern, but can cause problems

  //match.params is passed to the component from react router when rendered. params is an object that will list
  //all of the different wildcare tokens found within a url
  const { id } = this.props.match.params;
  this.props.fetchPost(id);
}

onDeleteClick() {
  const { id } = this.props.match.params;
  this.props.deletePost(id, () => {
    this.props.history.push('/')
  });
}

  render() {
  
    const { post } = this.props
    //props.post will be undefined on the first render, so we add a check
    if(!post){
      return(
        <div>Loading..</div>
      )
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
        Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//first arg is applications state, ownProps as a second arg (name by convention) represent the props to be sent to the component
//useful for pairing down the props, instead of passing the entire state to the component
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);