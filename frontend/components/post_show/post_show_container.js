import { connect } from 'react-redux';
import { fetchPost, deletePost, editPost } from '../../actions/posts_actions';
import PostShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  // debugger 
  return ({
    post: state.entities.posts[ownProps.match.params.id],
    userId: state.session.currentUser.id,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  deletePost: (id) => dispatch(deletePost(id)),
  editPost: (post) => dispatch(editPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);