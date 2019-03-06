import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render () {
    let posts = Object.values(this.props.posts.filter( (post) => {
      if (post.photoUrl) return post;
    })).map((post) => <ul key={post.id}><PostIndexItem post={post} /></ul> ).reverse();

    return (
      <>
        <ul><NavBarContainer /></ul>
        <div>{posts}</div>
      </>
    )
  }
}

export default PostIndex;