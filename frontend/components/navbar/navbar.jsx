import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.logout(); // .then(() => this.props.history.push('/login'));
  // }

  render () {
    return (
      <div className="navbar">
        <div className="logoutButton">
          <Link to={`/login`}>
            <input onClick={() => this.props.logout()} type="submit" value="Logout" />
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar;