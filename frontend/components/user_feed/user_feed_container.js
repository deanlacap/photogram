import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/posts_actions';
// import { fetchAllPostLikes } from '../../actions/post_like_actions';
import UserFeed from './user_feed';

const mapStateToProps = (state) => {
  // debugger 
  return ({
    posts: Object.values(state.entities.posts),
    userId: state.session.currentUser.id,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchAllPosts: () => (dispatch(fetchAllPosts())),
    // fetchAllPostLikes: () => dispatch(fetchAllPostLikes())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFeed);