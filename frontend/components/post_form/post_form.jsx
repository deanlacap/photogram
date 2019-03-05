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
    // this.props.action(this.state); //.then(() => this.props.history.push('/'));
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
    return (
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
        <h3>Upload a Photo</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Caption:</label>
          <label>
            <textarea
              onChange={this.update('caption')} />
          </label>
          <label>
            <input 
              type="file" 
              onChange={this.handleFile}
            />
          </label>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
