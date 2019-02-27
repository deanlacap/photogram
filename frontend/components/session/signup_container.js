import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SignUp from './signup';


// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'signup',
//     navLink: <Link to="/login">log in instead</Link>,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    signUp: (user) => dispatch(createNewUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);