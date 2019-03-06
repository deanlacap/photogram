import React from 'react';
// import PostShowContainer from './post_show_container';
import NavBarContainer from '../navbar/navbar_container';

class PostShow extends React.Component {

  constructor (props) {
    // debugger 
    super (props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      captionEdit: false
    };
  }

  componentDidMount () {
    this.props.fetchPost(this.props.match.params.id)
    .then (() => this.setState({ originalPostcaption: this.props.post.caption }));
  }

  handleClick (e) {
    e.preventDefault();
    this.setState({captionEdit: true});
  }

  handleDelete () {
    this.props.deletePost(this.props.post.id).then( () => this.props.history.push('/'));
  }

  render() {
    let post = this.props.post;
    // debugger 
    if (!post) return <div>loading....</div>

    let caption = <div className="postCaption">{post.username}{post.caption}</div>

    let blankCaption = <div className="editCaption"><textarea value={this.originalPostcaption}></textarea></div>

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
            
              <button onClick={this.handleClick}><i className="fas fa-user-edit"></i></button>
              <button onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
            </div>
          </div>
          <div className="image">
            <ul><img src={`${post.photoUrl}`} /></ul>
          </div>
          {this.state.captionEdit ? blankCaption : caption}
          {caption}
        </div>
      </>
    );
  }
}

export default PostShow;