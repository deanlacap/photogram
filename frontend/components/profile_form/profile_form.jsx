import React from 'react';
import { Link } from 'react-router-dom';

class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      username: "",
      bio: "",
      displayName: "",
      gender: "",
      phoneNumber: "",
      location: "",
      website: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.editUser(this.state).then( () => this.props.history.push('/'));
  }

  render () {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className="inputField">
          <input
            className="signup-email"
            type="text"
            placeholder="Email"
            onChange={this.update('email')}
          />
        </div>
        <div className="inputField">
          <input
            className="signup-fullName"
            type="text"
            placeholder="Full Name"
            onChange={this.update('name')}
          />
        </div>
        <div className="inputField">
          <input
            className="signup-username"
            type="text"
            placeholder="Username"
            onChange={this.update('username')}
          />
        </div>
        <div className="submitButtonParent">
          <input className="submitButton" type="submit" value="Edit Profile" />
        </div>
      </form>
    )
  }

}

export default ProfileForm;

















































{/* <form className='form' onSubmit={this.handleSubmit}>
  <div className="signUpDemoParent">
    <button className="signUpDemoButton" onClick={this.handleDemoUser} >Demo Log in</button>
  </div>
  <div className='or-text'>OR</div>
  <div className="inputField">
    <input
      className="signup-email"
      type="text"
      placeholder="Email"
      onChange={this.update('email')}
    />
  </div>
  <div className="inputField">
    <input
      className="signup-fullName"
      type="text"
      placeholder="Full Name"
      onChange={this.update('name')}
    />
  </div>
  <div className="inputField">
    <input
      className="signup-username"
      type="text"
      placeholder="Username"
      onChange={this.update('username')}
    />
  </div>
  <div className="inputField">
    <input
      className="signup-password"
      type="password"
      placeholder="Password"
      onChange={this.update('password')}
    />
  </div>
  <div className="submitButtonParent">
    <input className="submitButton" type="submit" value="Sign up" />
  </div>
</form> */}