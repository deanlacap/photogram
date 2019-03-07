import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
    // this.props.fetchAllPostLikes();
  }

  countLikes(like_array, post) {
    let count = 0; 

    for (let i = 0; i < post_array.length; i++) {
      let like = like_array[i];

      if (like.post_id === post.id) count ++;
    }

    return count;
  }

  render () {
    let posts = Object.values(this.props.posts.filter( (post) => {
      if (post.photoUrl) return post;
    })).map((post) => <ul key={post.id}><PostIndexItem post={post} /></ul> ).reverse();

    return (
      <div className="indexPage">
        <ul><NavBarContainer /></ul>
        <div>{posts}</div>
      </div>
    )
  }
}

export default PostIndex;