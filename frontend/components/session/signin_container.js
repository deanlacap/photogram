import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SignIn from './signin';

const mapStateToProps = (state) => {
  // debugger
  return {
    errors: state.errors.sessionErrors,
    // navLink: <Link to="/signup">log in instead</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (form) => dispatch(login(form)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);