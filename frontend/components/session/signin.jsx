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
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state); //maybe chain a way to go straight to profile home page
  }

  render() {
    return (
      <div className="signinDiv">
        <div className="signin" >
          <form className="form" onSubmit={this.handleSubmit}>
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
              <input className="submitButton" type="submit" value="Log in" />
          </form>
        </div >
        <div>
          <div className="noAccount">
            <label className='account'>Don't have an account?</label>
            <Link to={`/signup`}>
              <input className="redirect" type="submit" value="Sign up" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

}

export default SignIn;