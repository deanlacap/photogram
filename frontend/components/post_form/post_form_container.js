import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/posts_actions';


const mapDispatchToProps = (dispatch) => {
  return {
    action: post => dispatch(createPost(post)),
  };
};

export default connect(undefined, mapDispatchToProps)(PostForm);
