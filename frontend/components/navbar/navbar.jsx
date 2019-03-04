import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="navBar">
        <div className="navBarLinkToHome">
          <Link to={`/home`} ><i className="fab fa-instagram"></i></Link>
          <Link to={`/home`}><div className="logo-separator"></div></Link>
          <Link to="/home"><p className="logo-name">Photogram</p></Link>
        </div>
        <div className="rightSideNav">
          <Link to={`/home`}><i className="far fa-user"></i></Link>
          <Link to={`/login`} onClick={() => this.props.logout()}>
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar;