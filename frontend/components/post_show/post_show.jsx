import React from 'react';
// import PostShowContainer from './post_show_container';
import NavBarContainer from '../navbar/navbar_container';

class PostShow extends React.Component {

  constructor (props) {
    super (props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    this.props.fetchPost(this.props.match.params.id);
    // debugger
  }

  // handleClick (e) {
    // logic for navigating to edit page 
  // }

  handleDelete () {
    this.props.deletePost(this.props.post.id).then( () => this.props.history.push('/'));
  }

  render() {
    let post = this.props.post;
    if (!post) return <div>loading....</div>

    return (
      <>
      <div><NavBarContainer /></div>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="postBox">
          <div className="postHeader">
            {/* {console.log(post.username)} */}
            <div className="leftSideHeader">
              <ul className="postUsername"><h2>{post.username}</h2></ul>
            </div>
            <div className="rightSideHeader">
              <button onClick={() => this.handleclick()}><i className="fas fa-user-edit"></i></button>
              <button onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
            </div>
          </div>
          <div className="image">
            <ul><img src={`${post.photoUrl}`} /></ul>
          </div>
        </div>
      </>
    );
  }
}

export default PostShow;