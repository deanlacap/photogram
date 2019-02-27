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
      <div className='signup'>
          <form className='form' onSubmit={this.handleSubmit}>
            <div className='name' ><ul><h2>Photogram</h2></ul></div>
            <div id='text'><ul><h3>Sign up to see photos and videos from your friends.</h3></ul></div>
            <div className="inputField">
              <input 
                type="text"
                placeholder="Email"
                onChange={this.update('email')}
                />
            </div>
            <div className="inputField">
              <input 
                type="text"
                placeholder="Full Name"
                onChange={this.update('name')}
                />
            </div>
            <div className="inputField">
              <input 
                type="text"
                placeholder="Username"
                onChange={this.update('username')}
                />
            </div>
            <div className="inputField">
              <input 
                type="password"
                placeholder="Password"
                onChange={this.update('password')}
              />
            </div>
            <div className="inputField">
              <input type="submit" value="Sign up" />
            </div>
            <div className="inputField">
              <Link to={`/login`}>
                <input type="submit" value="Log in" />
              </Link>
            </div>
            <div id='text'><ul><h3>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</h3></ul></div>
        </form>
      </div>
    )
  }
}

export default SignUp;