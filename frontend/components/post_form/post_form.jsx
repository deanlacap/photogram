import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.state = {
      caption: "",
      photoFile: null,
      photoUrl: null,
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createPost(this.state).then((post) => this.props.history.push('/${post.id}'));
    let formData = new FormData();
    // debugger 
    formData.append('post[caption]', this.state.caption);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    this.props.createPost(formData);
  }

  handleFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

    return (
      <div className="pageDiv">
        <div>
          <div><NavBarContainer /></div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="uploadDiv">
            <h3>Upload a Photo</h3>
            <div className="preview">
              {preview}
            </div>
            <form onSubmit={this.handleSubmit}>
              <label>Caption:</label>
              <div className="caption">
                <textarea
                  placeholder="Add a caption to your photo!!"
                  onChange={this.update('caption')} 
                />
              </div>
              <div>
                <input 
                  type="file" 
                  onChange={this.handleFile}
                />
              </div>

              <input type="submit" />
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    )
  }
}

export default PostForm;
