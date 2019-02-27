import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SignIn from './signin';

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (form) => dispatch(login(form))
  });
};

export default connect(null, mapDispatchToProps)(SignIn);