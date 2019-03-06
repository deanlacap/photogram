import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost, editPost } from '../../actions/posts_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    username: state.session.username
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    editPost: (post) => dispatch(editPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
