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
          <div className="inputField">
            <input type="submit" value="Log in" />
          </div>
          <div className="inputField">
          <div >
              <label className="noAccount">Don't have an account?</label>
            <Link to={`/signup`}>
              <input type="submit" value="Sign up"/>
            </Link>
          </div>
          </div>
        </form>
      </div >
    )
  }

}

export default SignIn;