import React from 'react';
import PostContainer from './post_container';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    let post = this.props.post;

    return (
      <div>
        <ul><img src={post.photoUrl} /></ul>
      </div>
    );
  }
}

export default Post;