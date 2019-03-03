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
      <div className="navBar">
        <div className="navBarLinkToHome">
          <Link to={`/home`} ><i className="fab fa-instagram"></i></Link>
          <Link to={`/home`}><div className="logo-separator"></div></Link>
          <Link to="/home"><p className="logo-name">Photogram</p></Link>
        </div>
        <div className="rightSideNav">
          <Link to={`/login`} onClick={() => this.props.logout()}>
            <i className="fas fa-sign-out-alt"></i>
          </Link>
          <Link to={`/home`}><i className="far fa-user"></i></Link>
        </div>
      </div>
    )
  }
}

export default NavBar;