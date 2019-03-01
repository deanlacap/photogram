import { connect } from 'react-redux';
import { createNewUser, clearErrors, login } from '../../actions/session_actions';
import SignUp from './signup';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionErrors,
    // navLink: <Link to="/signup">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (user) => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
