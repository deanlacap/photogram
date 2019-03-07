import React from 'react';
// import PostContainer from './post_container';
import { Link } from 'react-router-dom';
import PostCaption from '../comment/comment';

class PostIndexItem extends React.Component {

  // componentDidMount() {
  //   this.props.fetchPost(this.props.match.params.postId);
  // }

  // count (array) {
  //   let sum = 0;

  //   for (let i = 0; i < array.length; i++) {
  //     sum ++;
  //   }

  //   return sum;
  // }

  render() {
    let post = this.props.post;
    // let count = Object.values(post.likes);

    return (
      <>
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> */}
        <div className="postBox">
          <div className="postHeader">
            {/* {console.log(post.username)} */}
            <ul className="postUsername"><h2>{post.username}</h2></ul>
          </div>
          <div className="image">
             <Link to={`/post/${post.id}`}>
              <img src={`${post.photoUrl}`} />
            </Link>
          </div>
          <div className="postCaption">
            {post.username}{post.caption}
          </div>
        </div>
      </>
    );
  }
}

export default PostIndexItem;