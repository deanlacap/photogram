import React from 'react';
// import PostShowContainer from './post_show_container';
import NavBarContainer from '../navbar/navbar_container';

class PostShow extends React.Component {

  constructor (props) {
    // debugger 
    super (props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.state = {
      captionEdit: false,
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount () {
    this.props.fetchPost(this.props.match.params.id)
    .then (() => this.setState({ originalPostcaption: this.props.post.caption,
      id: this.props.post.id,
      caption: this.props.post.caption,
     }));
  }

  handleEdit (e) {
    e.preventDefault();
    this.setState({captionEdit: true});
  }

  handleEditSubmit (e) {
    e.preventDefault();
    this.props.editPost(this.state).then( () => this.props.history.push('/'));
  }

  handleDelete () {
    this.props.deletePost(this.props.post.id).then( () => this.props.history.push('/'));
  }

  render() {
    let post = this.props.post;
    // debugger 
    if (!post) return <div>loading....</div>

    let caption = <div className="captionBox">
                    <div className="postCaption">
                      <div className="captionText"><b>{post.username}</b></div>
                      <div className="">{post.caption}</div>
                    </div>
                  </div>

    let blankCaption = <div>
      <div className="editCaptionParent"><textarea className="editCaption" wrap="hard" placeholder={this.state.originalPostcaption} onChange={this.update('caption')} /> </div>
        <div className="editSubmitParent">
          <button className="editSubmitButton" onClick={this.handleEditSubmit}>Submit Caption Edit</button>
        </div>
      </div>

    let edit; 
    debugger 
    if (this.props.userId == post.userId) {
      edit = <div>
              <button onClick={this.handleEdit}><i className="fas fa-user-edit"></i></button>
              <button onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
            </div>
    } else {
      edit = [];
    }
    debugger 
    

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
              <ul className="postUsername"><h2><b>{post.username}</b></h2></ul>
            </div>
            <div className="rightSideHeader">
              {edit}
            </div>
          </div>
          <div className="image">
            <ul><img src={`${post.photoUrl}`} /></ul>
          </div>
          {this.state.captionEdit ? blankCaption : caption}
        </div>
      </>
    );
  }
}

export default PostShow;