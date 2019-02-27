import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.signUp(this.state); //maybe chain a way to go straight to profile home page
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul><h2>Photogram</h2></ul>
        <ul><h3>Sign up to see photos and videos from your friends.</h3></ul>
        <ul>
          <input 
            type="text"
            placeholder="Email"
            onChange={this.update('email')}
            />
        </ul>
        <ul>
          <input 
            type="text"
            placeholder="Full Name"
            onChange={this.update('name')}
            />
        </ul>
        <ul>
          <input 
            type="text"
            placeholder="Username"
            onChange={this.update('username')}
            />
        </ul>
        <ul>
          <input 
            type="password"
            placeholder="Password"
            onChange={this.update('password')}
            />
        </ul>
        <ul>
          <input type="submit" name="Sign up" />
        </ul>
        <ul><h3>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</h3></ul>
      </form>
    )
  }
}

export default SignUp;