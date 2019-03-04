import React from 'react';
// import PostContainer from './post_container';

class Post extends React.Component {

  // componentDidMount() {
  //   this.props.fetchPost(this.props.match.params.postId);
  // }

  render() {
    let post = this.props.post;

    return (
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="postHeader">
          {console.log(post.username)}
          <ul><h2>{post.username}</h2></ul>
        </div>
        <div className="image">
          <ul><img src={`${post.photoUrl}`} /></ul>
        </div>
      </>
    );
  }
}

export default Post;