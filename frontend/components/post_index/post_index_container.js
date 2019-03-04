import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/posts_actions';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.values(state.entities.posts)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllPosts: () => ( dispatch(fetchAllPosts()) )
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);