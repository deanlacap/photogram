import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import Post from './post';

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
    })).map((post) => <ul key={post.id}><Post post={post} userName={post.userName}/></ul> );

    return (
      <>
        <ul><NavBarContainer /></ul>
        <div>{posts}</div>
      </>
    )
  }
}

export default PostIndex;