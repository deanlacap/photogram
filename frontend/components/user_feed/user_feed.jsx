import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import PostIndexItem from '../post_index/post_index_item';

class UserFeed extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
    // console.log(this.props.posts)
    // this.props.fetchAllPostLikes();
  }

  // countLikes(like_array, post) {
  //   let count = 0;

  //   for (let i = 0; i < post_array.length; i++) {
  //     let like = like_array[i];

  //     if (like.post_id === post.id) count++;
  //   }

  //   return count;
  // }

  render() {
    // console.log (this.props.posts);
    // debugger 
    let posts = this.props.posts.filter( post => post.userId == this.props.userId) 
    posts = posts.map(post => <PostIndexItem post={post} key={post.id} />).reverse(); 
    // console.warn(posts);

    return (
      <div className="indexPage">
        <ul><NavBarContainer /></ul>
        <div>{posts}</div>
      </div>
    )
  }
}

export default UserFeed;