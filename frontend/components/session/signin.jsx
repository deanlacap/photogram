import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update (field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.login(this.state); //maybe chain a way to go straight to profile home page
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  // componentDidUpdate () {
  //   this.props.clearErrors();
  // }

  handleDemoUser(event) {
    event.preventDefault();
    let user = { username: "dean", password: "password" };
    this.props.login(user);
  }

  render() {
    // let current_errors;
    // if (this.state.errors.length > 0) {
    //   let current_errors = this.state.errors;
    // }

    return (
      <>
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
      </div>
      </>
    )
  }

}

export default SignIn;