import React from 'react';
// import PostContainer from './post_container';
import { Link } from 'react-router-dom';
import PostCaption from '../comment/comment';

class PostIndexItem extends React.Component {

  constructor (props) { 
    super(props);
    this.state = {
      heartStatus: false,
    };
    this.handleHeart = this.handleHeart.bind(this);
  }

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

  handleHeart (e) {
    e.preventDefault();
    this.setState({heartStatus: (this.state.heartStatus === false) ? true : false});
  }

  render() {
    console.log(this.props.post);
    let post = this.props.post;
    // let count = Object.values(post.likes);
    let username = <b>{post.username}</b> 
    let heart;
    if (this.state.heartStatus === true) {
      heart = 
      <div>
        <div className="redHeart"><i className="fas fa-heart"></i></div>
        <div><h2 className="likeText"><b>1 like</b></h2></div>
      </div>
    } else {
      heart = <div className="blackHeart"><i className="far fa-heart"></i></div>
    }
    
    return (
      <>
        <div className="postBox">
  <div className="postHeader">
    <ul className="postUsername"><h2>{username}</h2></ul>
  </div>
  <div className="image">
    <Link to={`/post/${post.id}`}>
      <img src={`${post.photoUrl}`} />
    </Link>
  </div>
  <div className="captionBox">
    <div className="heartCommentSection">
      <div><button onClick={this.handleHeart} className="heartLike">{heart}</button></div>
      <div><button><i className="far fa-comment"></i></button></div>
    </div>
    <div className="postCaption">
      <div className="captionText">{username}</div>
      <div>{post.caption}</div>
    </div>
  </div>
</div>
      </>
    );
  }
}

export default PostIndexItem;

