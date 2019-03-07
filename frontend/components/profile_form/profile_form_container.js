import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import ProfileForm from './profile_form';
import { editUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    editUser: (user) => dispatch(editUser(user)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);