import React from 'react';

class SignIn extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      username: "",
      password: ""
    };
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signUp(this.state); //maybe chain a way to go straight to profile home page
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul><h2>Photogram</h2></ul>
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
          <input type="submit" name="Log in" />
        </ul>
      </form>
    )
  }

}

export default SignIn;