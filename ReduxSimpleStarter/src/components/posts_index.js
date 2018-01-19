import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
//the component will immediately render with no data, exec fetchPosts and then rerender when state changes
componentDidMount(){
  this.props.fetchPosts();
}

renderPosts() {
  //lodash has a map function that caniterate over objects
  return _.map(this.props.posts, post => {
    return (
      <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
        {post.title}
        </Link>
      </li>
    )
  })
}

  render(){
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to="/posts/new">
            Add a Posts
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

//call mapStateToProps whenever we want to consume anything from application level state
function mapStateToProps(state){
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts } )(PostsIndex);