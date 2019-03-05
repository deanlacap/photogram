import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleDemoUser(event) {
    event.preventDefault();
    let user = { username: "dean", password: "password" };
    this.props.login(user);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();

    // if (errorLength > 0) {

    // }
    this.props.login(this.state); //maybe chain a way to go straight to profile home page
  }

  render() {
    // debugger
    let user = { username: "dean", password: "password" };

    return (
      <>
        <div className="pageDiv">
          <div className="signinDiv">
            <div className="signin" >
              <form className="signInForm" onSubmit={this.handleSubmit}>
                <div className="name"><h2>Photogram</h2></div>
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
                <div className="signInButtonParent">
                  <input className="signInSubmitButton" type="submit" value="Log in" />
                </div>
                <div className='sign-in-or-text'>OR</div>
                <button className="signInDemoButton" onClick={this.handleDemoUser} >Demo Log in</button> 
                <label className="errors">{this.props.errors.map((error, idx) => <ul key={idx}>{error}</ul>)}</label>
              </form>
            </div >
            <div>
            </div>
          </div>
          <div className="noAccountDiv">
            <div className="noAccount">
              <label className='account'>Don't have an account?</label>
              <Link to={`/signup`}>
                <input className="redirect" type="submit" value="Sign up" />
              </Link>
            </div>
          </div >
          <div className="bottomLinksParentDiv">
            <div className="bottomLinksParent">
              <div className="bottomLinks">
                <ul>
                  ABOUT US
                </ul>
                <ul>
                  SUPPORT
                </ul>
                <ul>
                  PRESS
                </ul>
                <ul>
                  API
                </ul>
                <ul>
                  JOBS
                </ul>
                <ul>
                  PRIVACY
                </ul>
                <ul>
                  TERMS
                </ul>
                <ul>
                  DIRECTORY
                </ul>
                <ul>
                  PROFILES
                </ul>
                <ul>
                  HASHTAGS
                </ul>
                <ul>
                  LANGUAGE
                </ul>
                <ul>
                  © 2019 PHOTOGRAM
                </ul>
              </div>
            </div>
          </div>
          </div>
        
      </>
    )
  }

}

export default SignIn;