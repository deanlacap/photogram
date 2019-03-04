import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class PostIndex extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render () {
    let posts = this.props.posts.filter( (post) => {
      if (post.photoUrl) return post;
    });

    return (
      <>
        <ul><NavBarContainer /></ul>
        {console.log(posts)}
      </>
    )
  }
}

export default PostIndex;