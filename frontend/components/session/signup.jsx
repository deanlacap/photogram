
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
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update (field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  handleSubmit (event) {
    event.preventDefault();

    // if (errorLength > 0) {

    // }
    this.props.signUp(this.state); //maybe chain a way to go straight to profile home page
  }

  // componentDidUpdate() {
  //   this.props.clearErrors();
  // }

  handleDemoUser (event) {
    event.preventDefault();
    let user = {username: "dean", password: "password"};
    this.props.login(user);
  }

  // handleErrors (event) {
  //   event.preventDefault();

  // }
 
  render () {
      return (
      <div className="signupDiv">
        <div className='signup'>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className='name' ><h2>Photogram</h2></div>
              <div id='text'><h3>Sign up to see photos and videos from your friends.</h3></div>
              <button className="signUpDemoButton" onClick={this.handleDemoUser} >Demo Log in</button> 
              <div id='text'><h3>OR</h3></div>
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
      
              <input className="submitButton" type="submit" value="Sign up" />
              <label className="errors">{this.props.errors.map((error,idx) => <li key={idx}>{error}</li>)}</label>
              <div id='text'><h3>By signing up, you agree to our Terms, Data Policy, and Cookies Policy.</h3></div>
          </form>
        </div>
        <div>
          <div className="haveAccount">
            <label className='account'>Have an account?</label>
              <Link to={`/login`}>
                <input className="redirect" type="submit" value="Log in" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;

