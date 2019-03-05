import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../navbar/navbar_container';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      caption: "",
    };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state); //.then(() => this.props.history.push('/'));
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
              onChange={this.update('url')} />
          </label>

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
