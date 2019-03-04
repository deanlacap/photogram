import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts_actions';
import Post from './post';

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId]
});

const mapDispatchToProps = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);

