import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/posts_actions';
import { fetchAllPostLikes } from '../../actions/post_like_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.values(state.entities.posts)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllPosts: () => ( dispatch(fetchAllPosts())),
    fetchAllPostLikes: () => dispatch(fetchAllPostLikes())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);