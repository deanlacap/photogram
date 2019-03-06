import React from 'react';
// import PostShowContainer from './post_show_container';
import NavBarContainer from '../navbar/navbar_container';

class EditPost extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    // debugger
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState({captionEdit: true});
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    let post = this.props.post;
    debugger
    if (!post) return <div>loading....</div>

    // let caption = <div className="postCaption">{post.username}{post.caption}</div>

    let blankCaption = <div className="editCaption"><textarea value={this.originalPostcaption}></textarea></div>

    return (
      <>
        <div><NavBarContainer /></div>
        <br />
        <br />
        <br />
        <br />
        <div className="postBox">
          <div className="postHeader">
            {/* {console.log(post.username)} */}
            <div className="leftSideHeader">
              <ul className="postUsername"><h2>{post.username}</h2></ul>
            </div>
          </div>
          <div className="image">
            <ul><img src={`${post.photoUrl}`} /></ul>
          </div>
          {blankCaption}
        </div>
        <div className="editSubmit" onClick={this.handleSubmit}>
          <input type="submit"/>
        </div>
      </>
    );
  }
}

export default EditPost;